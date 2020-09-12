import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import {goBack, closeModal} from "./js/store/router/actions";
import {getActivePanel} from "./js/services/_functions";
import * as VK from './js/services/VK';

import {View, Root, ModalRoot, ConfigProvider} from "@vkontakte/vkui";

import HomePanelProfile from './js/panels/home/base';
import HomePanelGroups from './js/panels/home/groups';
import HomePanelSelectType from './js/panels/home/selectType';
import HomePanelTarget from './js/panels/home/target';
import HomePanelAdditionally from './js/panels/home/additionally';
import HomePanelRepost from './js/panels/home/repost';
import HomePanelFeed from './js/panels/home/feed';
import HomePanelLonggrid from './js/panels/home/longgrid';
import HomePanelRegular from './js/panels/home/regular';
import HomePanelRepostRegular from './js/panels/home/repostRegular';
import HomePanelFeedRegural from './js/panels/home/feedRegular';
import HomePanelLonggridRegular from './js/panels/home/longgridRegular';

import HomeBotsListModal from './js/components/modals/HomeBotsListModal';
import HomeBotInfoModal from './js/components/modals/HomeBotInfoModal';

import MorePanelExample from './js/panels/more/example';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.lastAndroidBackAction = 0;
    }

    componentWillMount() {
        const {goBack, dispatch} = this.props;

        dispatch(VK.initApp());

        window.onpopstate = () => {
            let timeNow = +new Date();

            if (timeNow - this.lastAndroidBackAction > 500) {
                this.lastAndroidBackAction = timeNow;

                goBack();
            } else {
                window.history.pushState(null, null);
            }
        };
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const {activeView, activeStory, activePanel, scrollPosition} = this.props;

        if (
            prevProps.activeView !== activeView ||
            prevProps.activePanel !== activePanel ||
            prevProps.activeStory !== activeStory
        ) {
            let pageScrollPosition = scrollPosition[activeStory + "_" + activeView + "_" + activePanel] || 0;

            window.scroll(0, pageScrollPosition);
        }
    }

    render() {
        const {goBack, closeModal, popouts, activeView, activeModals, panelsHistory, colorScheme} = this.props;

        let history = (panelsHistory[activeView] === undefined) ? [activeView] : panelsHistory[activeView];
        let popout = (popouts[activeView] === undefined) ? null : popouts[activeView];
        let activeModal = (activeModals[activeView] === undefined) ? null : activeModals[activeView];

        const homeModals = (
            <ModalRoot activeModal={activeModal}>
                <HomeBotsListModal
                    id="MODAL_PAGE_BOTS_LIST"
                    onClose={() => closeModal()}
                />
                <HomeBotInfoModal
                    id="MODAL_PAGE_BOT_INFO"
                    onClose={() => closeModal()}
                />
            </ModalRoot>
        );

        return (
            <ConfigProvider webviewType="internal" isWebView={true} scheme={colorScheme}>
                <Root activeView={activeView} popout={popout}>
                    <View
                        id="home"
                        modal={homeModals}
                        activePanel={getActivePanel("home")}
                        history={history}
                        onSwipeBack={() => goBack()}
                    >
                        <HomePanelProfile id="base" withoutEpic={true}/>
                        <HomePanelGroups id="groups"/>
                        <HomePanelSelectType id="selectType"/>
                        <HomePanelTarget id="target"/>
                        <HomePanelAdditionally id="additionally"/>
                        <HomePanelRepost id="repost"/>
                        <HomePanelFeed id="feed"/>
                        <HomePanelLonggrid id="longgrid"/>
                        <HomePanelRegular id="regular"/>
                        <HomePanelRepostRegular id="repostRegular"/>
                        <HomePanelFeedRegural id="feedRegular"/>
                        <HomePanelLonggridRegular id="longgridRegular"/>
                    </View>
                    <View
                        id="modal"
                        modal={homeModals}
                        activePanel={getActivePanel("modal")}
                        history={history}
                        onSwipeBack={() => goBack()}
                    >
                        <MorePanelExample id="filters"/>
                    </View>
                </Root>
            </ConfigProvider>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        activeView: state.router.activeView,
        activeStory: state.router.activeStory,
        panelsHistory: state.router.panelsHistory,
        activeModals: state.router.activeModals,
        popouts: state.router.popouts,
        scrollPosition: state.router.scrollPosition,

        colorScheme: state.vkui.colorScheme
    };
};


function mapDispatchToProps(dispatch) {
    return {
        dispatch,
        ...bindActionCreators({goBack, closeModal}, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
