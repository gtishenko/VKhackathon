import React from 'react';
import {connect} from 'react-redux';

import {closePopout, goBack, openModal, openPopout, setPage} from '../../store/router/actions';

import Icon28PictureOutline from '@vkontakte/icons/dist/28/picture_outline';

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
    Radio
} from "@vkontakte/vkui";

var selectValue = '';

var selectSum = true;
var selectDate = false;

class HomePanelAdditionally extends React.Component {

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
            selectDate: selectDate
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
            <Panel id={id}>
                <PanelHeader left={<PanelHeaderBack onClick={() => goBack()} />}>Дополнительно</PanelHeader>
                <FormLayout>
                    <FormLayoutGroup top="Автор">
                        <Select>
                            <option>{firstName} {lastName}</option>
                        </Select>
                    </FormLayoutGroup>
                    <FormLayoutGroup top="Сбор завершится">
                        <Radio defaultChecked={selectSum} onChange={(e) => {
                            this.setState({
                                selectSum: true,
                                selectDate: false
                            });
                            selectSum = true;
                            selectDate = false;
                            this.setState({
                                buttonDisabled: false
                            });
                        }} name="radio" value="1" defaultChecked>Когда соберём сумму</Radio>
                        <Radio defaultChecked={selectDate} onChange={() => {
                            this.setState({
                                selectSum: false,
                                selectDate: true
                            });
                            selectSum = false;
                            selectDate = true;
                            if(this.state.selectValue == '') {
                                this.setState({
                                    buttonDisabled: true
                                });
                            }
                            else {
                                this.setState({
                                    buttonDisabled: false
                                });
                            }
                        }} name="radio" value="2">В определенную дату</Radio>
                    </FormLayoutGroup>
                    {this.state.selectDate && <FormLayoutGroup top="Дата окончания">
                        <Select value={this.state.selectValue} onChange={(e) => {
                            if(e.target.value == '' && this.state.selectDate == true) this.setState({ buttonDisabled: true });
                            else this.setState({ buttonDisabled: false });
                            this.setState({ selectValue: e.target.value });
                            selectValue = e.target.value;
                        }} placeholder="Выберите дату">
                            <option>20 сентября</option>
                            <option>21 сентября</option>
                            <option>22 сентября</option>
                        </Select>
                    </FormLayoutGroup>}
                    <FixedLayout vertical="bottom"><Div><Button onClick={() => setPage('home','snippet')} disabled={this.state.buttonDisabled} size="xl">Далее</Button></Div></FixedLayout>
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
