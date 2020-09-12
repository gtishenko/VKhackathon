import React from 'react';
import {connect} from 'react-redux';

import {closePopout, goBack, openModal, openPopout, setPage} from '../../store/router/actions';

import Icon28PictureOutline from '@vkontakte/icons/dist/28/picture_outline';
import Icon28UserOutline from '@vkontakte/icons/dist/28/user_outline';
import Icon24Send from '@vkontakte/icons/dist/24/send';

import {Img} from './regular';
import {Name} from './regular';

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
    Textarea,
    Title,
    Text,
    Subhead,
    Separator,
    Progress,
    InfoRow,
    HorizontalScroll,
    CardScroll,
    SimpleCell,
    PanelHeaderButton
} from "@vkontakte/vkui";

var Textt = '';

class HomePanelRepostRegular extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            sum: '',
            name: '',
            description: '',
            disabled: true,
            image: null,
            buttonDisabled: true
        };
    }

    componentDidMount() {
        console.log(Img);
        
    }

    render() {
        const {id, setPage, goBack} = this.props;

        return (
            <Panel id={id}>
                <PanelHeader right={<PanelHeaderButton><Icon24Send onClick={ () => setPage('home','feedRegular') } /></PanelHeaderButton>} left={<PanelHeaderBack onClick={() => goBack()} />}>Матвей</PanelHeader>
                    <Div><Input onChange={(e) => Textt = e.target.value} placeholder="Что у Вас нового?" style={{ background: '#ffffff' }}/></Div>
                    <CardGrid>
                        <Card style={{ backgroundColor: '#ffffff', paddingBottom: 15, border: '0.5px solid rgba(0, 0, 0, 0.08)', boxShadow: '0px 0px 6px rgba(0, 0, 0, 0.04), 0px 2px 4px rgba(0, 0, 0, 0.01)' }} size="l">
                            <div style={{ height: 246 }}>
                                <div style={{ width: '100%', height: 140, backgroundImage: 'url(' + Img + ')', backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }} className="image"></div>
                                <Div>
                                    <Title level="3" weight="semibold">{Name}</Title>
                                    <Subhead style={{ color: '#818C99' }} weight="regular">Матвей Правосудов · Закончится через 5 дней</Subhead>
                                    <Separator style={{ marginTop: 8, marginBottom: 8 }} />
                                    <div style={{display: 'flex'}}>
                                    <InfoRow style={{ width: '70%', marginRight: 12 }} header="Помогите первым">
                                        <Progress value={0} />
                                    </InfoRow>
                                    <Button disabled mode="outline">Помочь</Button>
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

export default connect(null, mapDispatchToProps)(HomePanelRepostRegular);
export var Textt;
