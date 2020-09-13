import React from 'react';
import {connect} from 'react-redux';

import {closePopout, goBack, openModal, openPopout, setPage} from '../../store/router/actions';

import Icon24MoreHorizontal from '@vkontakte/icons/dist/24/more_horizontal';
import Icon24LikeOutline from '@vkontakte/icons/dist/24/like_outline';
import Icon24CommentOutline from '@vkontakte/icons/dist/24/comment_outline';
import Icon24ShareOutline from '@vkontakte/icons/dist/24/share_outline';
import Icon24ViewOutline from '@vkontakte/icons/dist/24/view_outline';

import {Img as Image} from './target';
import {Name} from './target';
import {Sum as Price} from './target';

import { firstName, lastName } from '../../../App';

import {
    Panel,
    PanelHeader,
    Button,
    Placeholder,
    PanelHeaderBack,
    List,
    Cell,
    CardGrid,
    Card,
    Div,
    File,
    FormLayoutGroup,
    FormLayout,
    Input,
    Select,
    Banner,
    FixedLayout,
    Radio,
    Avatar,
    SimpleCell,
    Text,
    Title,
    Subhead,
    Separator,
    InfoRow,
    Progress
} from "@vkontakte/vkui";

var selectValue = '';

var selectSum = true;
var selectDate = false;

class HomePanelSnippet extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            sum: '',
            name: '',
            description: '',
            disabled: true,
            image: null,
            buttonDisabled: false,
            selectValue: selectValue,
            selectSum: selectSum,
            selectValue: selectValue
        };
    }
    
    componentDidMount() {
        if(selectDate && selectValue == '') this.setState({ buttonDisabled: true });
        if(selectDate && selectValue != '') this.setState({ buttonDisabled: false });
        if(selectSum) this.setState({ buttonDisabled: false });
    }

    render() {
        const {id, setPage, goBack} = this.props;
        

        return (
            <Panel centered id={id}>
                <PanelHeader left={<PanelHeaderBack onClick={() => goBack()} />}>Сниппет</PanelHeader>
                <CardGrid>
                    <Card onClick={() => setPage('home','longgrid')} style={{ backgroundColor: '#ffffff', border: '0.5px solid rgba(0, 0, 0, 0.08)', boxShadow: '0px 0px 6px rgba(0, 0, 0, 0.04), 0px 2px 4px rgba(0, 0, 0, 0.01)', width: 344 }} size="l">
                        <div style={{ height: 246 }}>
                            <div style={{ width: '100%', height: 140, backgroundImage: 'url(' + Image + ')', backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }} className="image"></div>
                            <Div>
                                <Title level="3" weight="semibold">{Name}</Title>
                                <Subhead style={{ color: '#818C99' }} weight="regular">{firstName} {lastName} · Закончится через 5 дней</Subhead>
                                <Separator style={{ marginTop: 8, marginBottom: 8 }} />
                                <div style={{display: 'flex'}}>
                                <InfoRow style={{ width: '70%', marginRight: 12 }} className="test" header={"Собрано " + (Price/4).toFixed() + " ₽ из " + Price + " ₽"}>
                                    <Progress style={{ marginTop: 6 }} value={25} />
                                </InfoRow>
                                <Button mode="outline">Помочь</Button>
                                </div>
                            </Div>
                        </div>
                    </Card>
                </CardGrid>
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

export default connect(null, mapDispatchToProps)(HomePanelSnippet);
