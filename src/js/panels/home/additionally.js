import React from 'react';
import {connect} from 'react-redux';

import {closePopout, goBack, openModal, openPopout, setPage} from '../../store/router/actions';

import Icon28PictureOutline from '@vkontakte/icons/dist/28/picture_outline';

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
    Radio
} from "@vkontakte/vkui";

class HomePanelAdditionally extends React.Component {

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
                <PanelHeader left={<PanelHeaderBack onClick={() => goBack()} />}>Дополнительно</PanelHeader>
                <FormLayout>
                    <FormLayoutGroup top="Автор">
                        <Select>
                            <option>Матвей Правосудов</option>
                        </Select>
                    </FormLayoutGroup>
                    <FormLayoutGroup top="Сбор завершится">
                        <Radio name="radio" value="1" defaultChecked>Когда соберём сумму</Radio>
                        <Radio name="radio" value="2">В определенную дату</Radio>
                    </FormLayoutGroup>
                    <FormLayoutGroup top="Дата окончания">
                        <Select onChange={(e) => {
                            if(e.target.value == '') this.setState({ buttonDisabled: true });
                            else this.setState({ buttonDisabled: false });
                            
                        }} placeholder="Выберите дату">
                            <option>20 сентября</option>
                            <option>21 сентября</option>
                            <option>22 сентября</option>
                        </Select>
                    </FormLayoutGroup>
                    <FixedLayout vertical="bottom"><Div><Button onClick={() => setPage('home','repost')} disabled={this.state.buttonDisabled} size="xl">Далее</Button></Div></FixedLayout>
                </FormLayout>
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

export default connect(null, mapDispatchToProps)(HomePanelAdditionally);
