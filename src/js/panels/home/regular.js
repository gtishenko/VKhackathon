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
    Banner
} from "@vkontakte/vkui";

var Sum = '';
var Name = '';
var Description = '';
var Target = '';
var Img = null;
var ButtonDisabled = true;

class HomePanelRegular extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            sum: Sum,
            name: Name,
            description: Description,
            target: Target,
            image: Img,
            buttonDisabled: ButtonDisabled
        };
    }
    
    componentWillUnmount() {
        Sum = this.state.sum;
        Name = this.state.name;
        Description = this.state.description;
        Target = this.state.target;
        Img = this.state.image;
        ButtonDisabled = this.state.buttonDisabled;
        
    }

    render() {
        const {id, setPage, goBack} = this.props;

        return (
            <Panel id={id}>
                <PanelHeader left={<PanelHeaderBack onClick={() => goBack()} />}>Регулярный сбор</PanelHeader>
                {this.state.image == null ? <Div>
                    <Div style={{ height: 140, width: '', textAlign: 'center', border: '1px dashed #3F8AE0', borderRadius: 10 }}>
                        <File required style={{ marginTop: 55 }} accept="image/*" onChange={(e) => {
                            this.setState({ image: URL.createObjectURL(e.target.files[0]) });
                            Img = URL.createObjectURL(e.target.files[0]);
                            
                            if(this.state.target == '' || this.state.sum == '' || this.state.description == '' || this.state.name == '') this.setState({ buttonDisabled: true });
                            else this.setState({ buttonDisabled: false });
                        }} before={<Icon28PictureOutline/>} mode="tertiary">Загрузить обложку</File>
                    </Div>
                </Div> :
                <Banner
                    mode="image"
                    size="m"
                    onDismiss={() => {
                        this.setState({ image: null });
                        this.setState({ buttonDisabled: true });
                        Img = null;
                        ButtonDisabled = true;
                    }}
                    header={<><br/><br/><br/><br/><br/></>}
                    background={
                    <div
                        style={{
                        backgroundImage: 'url(' + this.state.image +')',
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        }}
                    />
                    }
                    asideMode="dismiss"
                />}
                <FormLayout>
                    <FormLayoutGroup top="Название сбора">
                        <Input value={this.state.name} onChange={(e) => {
                            this.setState({ name: e.target.value });
                            Name = e.target.value;
                            if(this.state.target == '' || this.state.sum == '' || this.state.description == '' || this.state.image == null || e.target.value == '') this.setState({ buttonDisabled: true });
                            else this.setState({ buttonDisabled: false });
                        }} placeholder="Название сбора"/>
                    </FormLayoutGroup>
                    <FormLayoutGroup top="Сумма, ₽">
                        <Input type="numeric" inputMode="numeric" max={999999999} value={this.state.sum} onChange={(e) => {
                            this.setState({
                                sum: e.target.value.replace(/[^-0-9]/g, '').replace('-','').trim().substring(0, 8)
                            });
                            Sum = e.target.value.replace(/[^-0-9]/g, '').replace('-','').trim().substring(0, 8);
                            if(this.state.target == '' || e.target.value == '' || this.state.description == '' || this.state.image == null || this.state.name == '') this.setState({ buttonDisabled: true });
                            else this.setState({ buttonDisabled: false });
                        }} placeholder="Сколько нужно в месяц?"/>
                    </FormLayoutGroup>
                    <FormLayoutGroup top="Цель">
                        <Input value={this.state.target} onChange={(e) => {
                            this.setState({ target: e.target.value });
                            Target = e.target.value;
                            if(e.target.value == '' || this.state.sum == '' || this.state.description == '' || this.state.image == null || this.state.name == '') this.setState({ buttonDisabled: true });
                            else this.setState({ buttonDisabled: false });
                        }} maxLength="25" placeholder="Например, поддержка приюта"/>
                    </FormLayoutGroup>
                    <FormLayoutGroup top="Описание">
                        <Input value={this.state.description} onChange={(e) => {
                            this.setState({ description: e.target.value });
                            Description = e.target.value;
                            if(this.state.target == '' || this.state.sum == '' || e.target.value == '' || this.state.image == null || this.state.name == '') this.setState({ buttonDisabled: true });
                            else this.setState({ buttonDisabled: false });
                        }} maxLength="2500" placeholder="На что пойдут деньги и как они кому-то помогут?"/>
                    </FormLayoutGroup>
                    <FormLayoutGroup top="Куда получать деньги">
                        <Select>
                            <option>Счёт VK Pay · 1234</option>
                        </Select>
                    </FormLayoutGroup>
                    <FormLayoutGroup top="Автор">
                        <Select>
                            <option>{firstName} {lastName}</option>
                        </Select>
                    </FormLayoutGroup>
                    <Button disabled={this.state.buttonDisabled} onClick={() => setPage('home','snippetRegular')} size="xl">Далее</Button>
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

export default connect(null, mapDispatchToProps)(HomePanelRegular);
export var Img;
export var Name;
export var Description;
export var Sum;
