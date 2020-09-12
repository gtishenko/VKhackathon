import React from 'react';
import {connect} from 'react-redux';

import {closePopout, goBack, openModal, openPopout, setPage} from '../../store/router/actions';

import Icon28TargetOutline from '@vkontakte/icons/dist/28/target_outline';
import Icon28CalendarOutline from '@vkontakte/icons/dist/28/calendar_outline';

import {
    Panel,
    PanelHeader,
    Button,
    Placeholder,
    PanelHeaderBack,
    List,
    Cell,
    CardGrid,
    Card
} from "@vkontakte/vkui";

class HomePanelSelectType extends React.Component {

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

    render() {
        const {id, setPage, goBack} = this.props;

        return (
            <Panel centered id={id}>
                <PanelHeader left={<PanelHeaderBack onClick={() => goBack()} />}>Тип сбора</PanelHeader>
                <CardGrid>
                    <Card onClick={() => setPage('home','target')} size="l">
                        <div style={{ width: '100%' }}>
                            <Cell description="Когда есть определенная цель" before={<Icon28TargetOutline />} expandable onClick={() => this.setState({ activePanel: 'nothing' })}>Целевой сбор</Cell>
                        </div>
                    </Card>
                    <Card onClick={() => setPage('home','regular')} size="l">
                        <div style={{ width: '100%' }}>
                        <Cell description="Если помощь нужна ежемесячно" before={<Icon28CalendarOutline />} expandable onClick={() => this.setState({ activePanel: 'nothing' })}>Регулярный сбор</Cell>
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

export default connect(null, mapDispatchToProps)(HomePanelSelectType);
