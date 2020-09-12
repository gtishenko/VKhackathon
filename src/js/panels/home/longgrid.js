import React from 'react';
import {connect} from 'react-redux';

import {closePopout, goBack, openModal, openPopout, setPage} from '../../store/router/actions';

import Icon24MoreHorizontal from '@vkontakte/icons/dist/24/more_horizontal';
import Icon24LikeOutline from '@vkontakte/icons/dist/24/like_outline';
import Icon24CommentOutline from '@vkontakte/icons/dist/24/comment_outline';
import Icon24ShareOutline from '@vkontakte/icons/dist/24/share_outline';
import Icon24ViewOutline from '@vkontakte/icons/dist/24/view_outline';
import Icon16LikeOutline from '@vkontakte/icons/dist/16/like_outline';
import Icon24BrowserBack from '@vkontakte/icons/dist/24/browser_back';

import {Textt} from './repost';
import {Img as Image} from './target';
import {Name} from './target';
import {Description} from './target';


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

class HomePanelLonggrid extends React.Component {
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
                <CardGrid style={{ padding: 0, margin: 0, marginTop: -15 }}>
                    <Card size="l">
                        <div style={{ backgroundImage: 'url(' + Image + ')', height: 140, backgroundPosition: 'center', backgroundSize: 'cover' }}>
                            <Icon24BrowserBack onClick={() => goBack()} fill="#ffffff" style={{ marginTop: 50, position: 'absolute' }} />
                        </div>
                    </Card>
                </CardGrid>
                <Div>
                    <Title level="2" weight="semibold" style={{ marginBottom: 4 }}>{Name}</Title>
                    <Title style={{ color: '#6D7885' }} level="3" weight="semibold">Автор Матвей Правосудов</Title>
                    <Title style={{ color: '#818C99' }} level="3" weight="regular">Сбор закончится через 5 дней</Title>
                    <Separator style={{ marginTop: 16, marginBottom: 16 }} />
                    <InfoRow header="Нужно собрать до 20 сентября">
                        <Progress value={87} className="progressbar" />
                    </InfoRow>
                    <Separator style={{ marginTop: 16, marginBottom: 16 }} />
                    <Text weight="regular">{Description}</Text>
                    <Separator style={{ marginTop: 16, marginBottom: 16 }} />
                    <div style={{display: 'flex'}}>
                        <Icon24LikeOutline fill="#99A2AD"/>
                        <div style={{ fontSize: 18, color: '#99A2AD', marginLeft: 6, marginTop: 3 }}>65</div>
                        <Icon24CommentOutline style={{ marginLeft: 27 }} fill="#99A2AD"/>
                        <div style={{ fontSize: 18, color: '#99A2AD', marginLeft: 6, marginTop: 3 }}>65</div>
                        <Icon24ShareOutline style={{ marginLeft: 27 }} fill="#99A2AD"/>
                        <div style={{ fontSize: 18, color: '#99A2AD', marginLeft: 6, marginTop: 3 }}>4</div>
                    </div>
                </Div>
                <Separator/>
                <SimpleCell
                    description="Отправил"
                    disabled
                    after={<Icon16LikeOutline/>}
                    before={<Avatar src={"https://s3-alpha-sig.figma.com/img/6c1d/8605/59feb807fc7e6e0266fdafd52f636c37?Expires=1600646400&Signature=TiCEvGRYjqV0gvjFoNs2Vh1B-8dYkN789G2hKP1SBnrWft5XtYuolluxZNQVKndTsDzAllsiWFTeq3oHGhwldCr45OoTxhptJYbMorxigVNCwKS7qLSm2Vm3b7BJDBkT-mu72EwE-ZJnOaGTpDOYFD9BjuG85rLGKBZAfRvMn1uioN7ClGdtwRVVycai7HATOrnLtuYp9aWNIaJFLxASOvoWxamZoCbnWmOxJVkHnQacQ4YW0kcrA3u~fa~QuyDzxnDxaz2JAYOWuC94mcYp1vr~BCXl9-eLxQ7AYVg4ad8anh5X8y7Dvw43uUlsnHQS-SCxW0fvFb-0F62VVmf~Ig__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"}/>}
                    >
                    Артур Стамбульцян
                </SimpleCell>
                <SimpleCell
                    disabled
                    before={<Avatar src={"https://s3-alpha-sig.figma.com/img/6c1d/8605/59feb807fc7e6e0266fdafd52f636c37?Expires=1600646400&Signature=TiCEvGRYjqV0gvjFoNs2Vh1B-8dYkN789G2hKP1SBnrWft5XtYuolluxZNQVKndTsDzAllsiWFTeq3oHGhwldCr45OoTxhptJYbMorxigVNCwKS7qLSm2Vm3b7BJDBkT-mu72EwE-ZJnOaGTpDOYFD9BjuG85rLGKBZAfRvMn1uioN7ClGdtwRVVycai7HATOrnLtuYp9aWNIaJFLxASOvoWxamZoCbnWmOxJVkHnQacQ4YW0kcrA3u~fa~QuyDzxnDxaz2JAYOWuC94mcYp1vr~BCXl9-eLxQ7AYVg4ad8anh5X8y7Dvw43uUlsnHQS-SCxW0fvFb-0F62VVmf~Ig__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"}/>}
                    >
                    <Input placeholder="Комментарий" />
                </SimpleCell>
                <FixedLayout vertical="bottom">
                    <Div>
                    <div style={{display: 'flex'}}>
                        <InfoRow style={{ width: '70%', marginRight: 12 }} header="Собрано 8 750 ₽ из 10 000 ₽">
                            <Progress value={87} />
                        </InfoRow>
                        <Button>Помочь</Button>
                    </div>
                    </Div>
                </FixedLayout>
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

export default connect(null, mapDispatchToProps)(HomePanelLonggrid);
