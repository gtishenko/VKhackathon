import React from 'react';
import {connect} from 'react-redux';

import {closePopout, goBack, openModal, openPopout, setPage} from '../../store/router/actions';

import Icon24LikeOutline from '@vkontakte/icons/dist/24/like_outline';
import Icon24CommentOutline from '@vkontakte/icons/dist/24/comment_outline';
import Icon24ShareOutline from '@vkontakte/icons/dist/24/share_outline';
import Icon16LikeOutline from '@vkontakte/icons/dist/16/like_outline';
import Icon24BrowserBack from '@vkontakte/icons/dist/24/browser_back';
import Icon28Send from '@vkontakte/icons/dist/28/send';
import Icon16Cancel from '@vkontakte/icons/dist/16/cancel';
import Icon16Done from '@vkontakte/icons/dist/16/done';

import {Img as Image} from './regular';
import {Name} from './regular';
import {Description} from './regular';
import {Sum as Price} from './regular';

import { firstName, lastName, photo_200 } from '../../../App';

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
    Avatar,
    Snackbar
} from "@vkontakte/vkui";

const blueBackground = {
    backgroundColor: 'var(--accent)'
  };

var Comments = [
    {Name: 'Алексей Мазелюк', Text: 'Отправил.', Avatar: 'https://sun6-14.userapi.com/impf/c855124/v855124560/1527d6/y0jnCiyWwDw.jpg?size=200x0&quality=88&crop=403,874,620,620&sign=f793455d0e9ce4b5ab71f4069ded97de&c_uniq_tag=y0BOB2jR1siWkrPhX5Z4A0x4GMJyk0VFta8q5X96oNY&ava=1'}
];

class HomePanelLonggridRegular extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            sum: '',
            name: '',
            description: '',
            disabled: true,
            image: null,
            buttonDisabled: true,
            snackbar: null,
            commentText: ''
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
                    <div style={{ fontSize: 14, color: '#818C99', fontWeight: 500 }}>Автор {firstName} {lastName}</div>
                    <div style={{ fontSize: 13, color: '#818C99' }}>Сбор закончится через 5 дней</div>
                    <Separator style={{ marginTop: 16, marginBottom: 16 }} />
                    <InfoRow className="test" header="Нужно собрать в сентябре">
                        <Progress style={{ marginTop: 4 }} value={25} className="progressbar" />
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
                {Comments.map((index, Comments) => <><SimpleCell
                    className="simpleCellTest"
                    description={index['Text']}
                    disabled
                    after={<Icon16LikeOutline/>}
                    before={<Avatar src={index['Avatar']}/>}
                    >
                    {index['Name']}
                </SimpleCell></>)}
                <SimpleCell
                    style={{ marginBottom: 70 }}
                    disabled
                    before={<Avatar src={photo_200}/>}
                    after={<Icon28Send onClick={() => {
                        if(this.state.commentText.trim() == '') {
                            if (this.state.snackbar) return;
                            this.setState({ snackbar:
                            <Snackbar
                                layout="vertical"
                                onClose={() => this.setState({ snackbar: null })}
                                before={<Avatar size={24} style={{ backgroundColor: '#ff0000' }}><Icon16Cancel fill="#fff" width={14} height={14} /></Avatar>}
                            >
                                Вы не можете отправить пустой комментарий
                            </Snackbar>
                            });
                        } else {
                            Comments.push(
                                {Name: firstName + " " + lastName, Text: this.state.commentText, Avatar: photo_200}
                            );
                            this.forceUpdate();
                            this.setState({ commentText: '' });
                            if (this.state.snackbar) return;
                            this.setState({ snackbar:
                                <Snackbar
                                    layout="vertical"
                                    onClose={() => this.setState({ snackbar: null })}
                                    before={<Avatar size={24} style={blueBackground}><Icon16Done fill="#fff" width={14} height={14} /></Avatar>}
                                >
                                    Комментарий успешно отправлен!
                                </Snackbar>
                            });
                        }
                    }}/>}
                    >
                    <Input value={this.state.commentText} onChange={(e) => {
                        this.setState({ commentText: e.target.value });
                    }} className="inputBorder" placeholder="Комментарий" />
                </SimpleCell>
                <FixedLayout filled vertical="bottom">
                    <Div>
                    <div style={{display: 'flex'}}>
                        <InfoRow className="test" style={{ width: '70%', marginRight: 12 }} header={"Собрано " + (Price/4).toFixed() + " ₽ из " + Price + " ₽"}>
                            <Progress style={{ marginTop: 4 }} value={25} />
                        </InfoRow>
                        <Button>Помочь</Button>
                    </div>
                    </Div>
                </FixedLayout>
                {this.state.snackbar}
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

export default connect(null, mapDispatchToProps)(HomePanelLonggridRegular);
