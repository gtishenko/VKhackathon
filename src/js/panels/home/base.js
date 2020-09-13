import React from 'react';
import {connect} from 'react-redux';

import {closePopout, goBack, openModal, openPopout, setPage} from '../../store/router/actions';

import {userID} from './../../../App';

import {
    Panel,
    PanelHeader,
    Input,
    Div,
    FormLayout,
    Button,
    Footer,
    Placeholder,
    Group,
    Avatar,
    SimpleCell,
    FormLayoutGroup,
    Textarea,
    Header,
    Link,
    HorizontalScroll,
    CardScroll,
    Card,
    Separator,
    FixedLayout
} from "@vkontakte/vkui";

class HomePanelBase extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            sum: '',
            name: '',
            description: '',
            disabled: true
        };

        this.sum = this.sum.bind(this);
    }

    sum() {
        console.log('test');
    }

    componentDidMount() {
        
    }

    render() {
        const {id, setPage} = this.props;

        return (
            <Panel id={id}>
                <PanelHeader>Пожертвования</PanelHeader>
                <Placeholder
                    action={<Button size="l" onClick={() => setPage('home','selectType')}>Создать сбор</Button>}
                    stretched
                >
                    У Вас пока нет сборов.<br/>Начните доброе дело.
                </Placeholder>
            </Panel>
        );
    }

}

const mapDispatchToProps = {
    setPage,
    goBack,
    openPopout,
    closePopout,
    openModal
};

export default connect(null, mapDispatchToProps)(HomePanelBase);
