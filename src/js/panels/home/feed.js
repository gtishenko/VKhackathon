import React from 'react';
import {connect} from 'react-redux';

import {closePopout, goBack, openModal, openPopout, setPage} from '../../store/router/actions';

import Icon24MoreHorizontal from '@vkontakte/icons/dist/24/more_horizontal';
import Icon24LikeOutline from '@vkontakte/icons/dist/24/like_outline';
import Icon24CommentOutline from '@vkontakte/icons/dist/24/comment_outline';
import Icon24ShareOutline from '@vkontakte/icons/dist/24/share_outline';
import Icon24ViewOutline from '@vkontakte/icons/dist/24/view_outline';

import {Textt} from './repost';
import {Img as Image} from './target';
import {Name} from './target';


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
    Avatar
} from "@vkontakte/vkui";
import { set } from 'core-js/fn/dict';

class HomePanelFeed extends React.Component {

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

    render() {
        const {id, setPage, goBack} = this.props;

        return (
            <Panel id={id}>
                <PanelHeader left={<PanelHeaderBack onClick={() => goBack()} />}>Матвей</PanelHeader>
                <SimpleCell
                    description="Час назад"
                    disabled
                    after={<Icon24MoreHorizontal/>}
                    before={<Avatar src={"https://s3-alpha-sig.figma.com/img/f302/1824/3badbb98a464d95eb4eb7c785244447e?Expires=1600646400&Signature=D~ipHIdQ1u93mar~lVsCB5CFugm~lJDlycs3321OkXXgfdTIOATxxvkJ0tpWSH2OO2FQTMEpTkjghHWcLDy1~Yz7hHe6gzxL7HYAj7UCXNCE9-q4ZD2g-2ruESfmrUOMq~gihSkngq7xOT29~qkbMxyhshwdMv4qOjLkkurcCzZrcRjBBK-w-TJKlB7frZru1x6p0O~PyNLHlwl1tQj~icUh6sj2V1jlpXGbapTgPsrjprVP7oAGuWCc5tRHyUXCPJGGhV9iiFx040qoSy3ASInKyglbY6gDXkXYYwCPV5pLnSoNPTp5WMfqxFHbMrjIuaxdenEjUT~baNWi06yw~g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"}/>}
                    >
                    Матвей Правосудов
                </SimpleCell>
                <Div>
                    <Text>
                        {Textt}
                    </Text>
                </Div>
                <CardGrid>
                    <Card onClick={() => setPage('home','longgrid')} style={{ backgroundColor: '#ffffff', border: '0.5px solid rgba(0, 0, 0, 0.08)', boxShadow: '0px 0px 6px rgba(0, 0, 0, 0.04), 0px 2px 4px rgba(0, 0, 0, 0.01)' }} size="l">
                        <div style={{ height: 246 }}>
                            <div style={{ width: '100%', height: 140, backgroundImage: 'url(' + Image + ')', backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }} className="image"></div>
                            <Div>
                                <Title level="3" weight="semibold">{Name}</Title>
                                <Subhead style={{ color: '#818C99' }} weight="regular">Матвей Правосудов · Закончится через 5 дней</Subhead>
                                <Separator style={{ marginTop: 8, marginBottom: 8 }} />
                                <div style={{display: 'flex'}}>
                                <InfoRow style={{ width: '70%', marginRight: 12 }} header="Собрано 8 750 ₽ из 10 000 ₽">
                                    <Progress value={87} />
                                </InfoRow>
                                <Button mode="outline">Помочь</Button>
                                </div>
                            </Div>
                        </div>
                    </Card>
                </CardGrid>
                <Div>
                    <div style={{display: 'flex'}}>
                        <Icon24LikeOutline fill="#99A2AD"/>
                        <div style={{ fontSize: 18, color: '#99A2AD', marginLeft: 6, marginTop: 3 }}>65</div>
                        <Icon24CommentOutline style={{ marginLeft: 27 }} fill="#99A2AD"/>
                        <div style={{ fontSize: 18, color: '#99A2AD', marginLeft: 6, marginTop: 3 }}>65</div>
                        <Icon24ShareOutline style={{ marginLeft: 27 }} fill="#99A2AD"/>
                        <div style={{ fontSize: 18, color: '#99A2AD', marginLeft: 6, marginTop: 3 }}>4</div>
                    </div>
                </Div>
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

export default connect(null, mapDispatchToProps)(HomePanelFeed);
