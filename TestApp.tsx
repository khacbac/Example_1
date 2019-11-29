import * as React from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    TextInput,
    FlatList,
    ScrollView,
    Dimensions,
    SafeAreaView,
} from 'react-native';
import LocationView, { LocationViewState } from './wizard1/LocationView';
import SubmitView from './wizard1/SubmitView';
import DetailView from './wizard1/DetailView';
import AddressView from './wizard1/AddressView';
import ServiceView from './wizard1/ServiceView';



interface Props {
    wByStep?: WizardByStep;
}
interface State {
    wByStep: WizardByStep;
}

const { width } = Dimensions.get('window');

export default class TestApp extends React.Component<Props, State> {

    private locationView: LocationView;
    private submitView: SubmitView;
    private detailView: DetailView;
    private serviceView: ServiceView;
    private addressView: AddressView;

    constructor(props) {
        super(props);
        this.state = {
            wByStep: this.props.wByStep || WizardByStep.getWizardBySteps()[0]
        }
    }

    _renderTopBar = () => {
        let { wByStep } = this.state;

        return (
            <View
                style={{
                    flexDirection: 'row',
                    // paddingVertical: 20,
                    // width: width
                }}>

                {WizardByStep.getWizardBySteps().map(current => {
                    return (
                        <View style={{
                            flex: 1,
                            // height: 100,
                        }}>
                            <TouchableOpacity
                                onPress={() => {
                                    this._doClickStep(current);

                                    // this._getScrollView().scrollTo(current.location);
                                    // this.setState({
                                    //     wByStep: current
                                    // });




                                    // if (current.step == WizardStep.SUBMIT) {
                                    //     let locationState: LocationViewState = this.locationView.state;
                                    //     this.submitView.setCurentAddress(locationState);
                                    // }
                                }}
                                style={{
                                    paddingVertical: 20,
                                }}>
                                <Text style={{
                                    fontSize: 12,
                                    color: wByStep.step >= current.step ? 'blue' : 'black'
                                }}>{current.title}</Text>
                            </TouchableOpacity>


                            <View style={{
                                width: '100%',
                                height: 5,
                                backgroundColor: wByStep.step >= current.step ? 'blue' : 'pink'
                            }} />
                        </View>
                    )
                })}
            </View>
        )
    }

    _doClickStep = (wizardStep: WizardByStep) => {
        switch (wizardStep.step) {
            case WizardStep.SUBMIT:
                if (!this._doClickSubmitView(wizardStep)) {
                    break;
                }
            case WizardStep.ADDRESS:
                if (!this._doClickAddressView(wizardStep)) {
                    break;
                }
            case WizardStep.SERVICE:
                if (!this._doClickServiceView(wizardStep)) {
                    break;
                }
            case WizardStep.DETAIL:
                if (!this._doClickDetailView(wizardStep)) {
                    break;
                }
            case WizardStep.LOCATION:
                this._doClickTabView(wizardStep);
                break;
            default:
                this._doClickTabView(wizardStep);
                break;
        }
    }

    _doClickSubmitView(wizardStep: WizardByStep) {
        if (!this.locationView.checkValid()) {
            let previous = WizardByStep.getPrevious(WizardStep.DETAIL)
            this._getScrollView().scrollTo(previous.location);
            this.setState({
                wByStep: previous
            });
            return false;
        }
        if ((!this.detailView.checkValid())) {
            let previous = WizardByStep.getPrevious(WizardStep.SERVICE)
            this._getScrollView().scrollTo(previous.location);
            this.setState({
                wByStep: previous
            });
            return false;
        }
        let locationState: LocationViewState = this.locationView.state;
        let detailState = this.detailView.state;
        this.submitView.setViewState(locationState, detailState);
        this._doClickTabView(wizardStep);
    }

    _doClickAddressView(wizardStep: WizardByStep) {
        if (!this.locationView.checkValid()) {
            let previous = WizardByStep.getPrevious(WizardStep.DETAIL)
            this._getScrollView().scrollTo(previous.location);
            this.setState({
                wByStep: previous
            });
            return false;
        }
        if ((!this.detailView.checkValid())) {
            let previous = WizardByStep.getPrevious(WizardStep.SERVICE)
            this._getScrollView().scrollTo(previous.location);
            this.setState({
                wByStep: previous
            });
            return false;
        }
        this._doClickTabView(wizardStep);

    }

    _doClickServiceView(wizardStep: WizardByStep) {
        if (!this.locationView.checkValid()) {
            let previous = WizardByStep.getPrevious(WizardStep.DETAIL)
            this._getScrollView().scrollTo(previous.location);
            this.setState({
                wByStep: previous
            });
            return false;
        }
        if ((!this.detailView.checkValid())) {
            let previous = WizardByStep.getPrevious(WizardStep.SERVICE)
            this._getScrollView().scrollTo(previous.location);
            this.setState({
                wByStep: previous
            });
            return false;
        }
        this._doClickTabView(wizardStep);
    }

    _doClickDetailView(wizardStep: WizardByStep) {
        if (!this.locationView.checkValid()) {
            let previous = WizardByStep.getPrevious(WizardStep.DETAIL)
            this._getScrollView().scrollTo(previous.location);
            this.setState({
                wByStep: previous
            });
            return false;
        }
        this._doClickTabView(wizardStep);
    }

    _doClickTabView(wizardStep: WizardByStep) {
        this._getScrollView().scrollTo(wizardStep.location);
        this.setState({
            wByStep: wizardStep
        });
    }

    _renderStep = () => {
        return (
            <ScrollView
                ref="scrollView"
                pagingEnabled
                horizontal
                scrollEnabled={false}
            >
                {this._getLocationStep()}
                {this._getDetailStep()}
                {this._getServiceStep()}
                {this._getAddressStep()}
                {this._getSubmitStep()}
            </ScrollView>
        )
    }

    _getLocationStep = () => {
        return <LocationView
            ref={r => this.locationView = r}
            onNext={() => {
                this._doClickDetailView(WizardByStep.getNext(WizardStep.LOCATION));
            }}
        />
    }

    _getDetailStep = () => {
        return <DetailView
            ref={r => this.detailView = r}
            onNext={() => {
                this._doClickSubmitView(WizardByStep.getNext(WizardStep.DETAIL));
            }}
            onPrevious={() => {
                let previous = WizardByStep.getPrevious(WizardStep.DETAIL)
                this._getScrollView().scrollTo(previous.location);
                this.setState({
                    wByStep: previous
                });
            }} />
    }

    _getServiceStep = () => {
        return <ServiceView
            ref={r => this.serviceView = r}
            onNext={() => {
                this._doClickSubmitView(WizardByStep.getNext(WizardStep.SERVICE));
            }}
            onPrevious={() => {
                let previous = WizardByStep.getPrevious(WizardStep.SERVICE)
                this._getScrollView().scrollTo(previous.location);
                this.setState({
                    wByStep: previous
                });
            }} />
    }

    _getAddressStep = () => {
        return <AddressView
            ref={r => this.addressView = r}
            onNext={() => {
                this._doClickSubmitView(WizardByStep.getNext(WizardStep.ADDRESS));
            }}
            onPrevious={() => {
                let previous = WizardByStep.getPrevious(WizardStep.ADDRESS)
                this._getScrollView().scrollTo(previous.location);
                this.setState({
                    wByStep: previous
                });
            }}
        />
    }

    _getSubmitStep = () => {
        return <SubmitView ref={r => this.submitView = r} />
    }

    _getTopScrollView = (): ScrollView => {
        return this.refs.topScrollView as ScrollView;
    }

    _getScrollView = (): ScrollView => {
        return this.refs.scrollView as ScrollView;
    }

    render() {

        return (
            <SafeAreaView style={styles.container}>
                {this._renderTopBar()}

                <Text testID="MyUniqueId123"></Text>

                <View style={{
                    flex: 1
                }}>
                    {this._renderStep()}
                </View>
            </SafeAreaView>
        );
    }
}

enum WizardStep {
    LOCATION = 0,
    DETAIL = 1,
    SERVICE = 2,
    ADDRESS = 3,
    SUBMIT = 4
}

export class WizardByStep {
    step: WizardStep;
    location: { x: number }
    index: number;
    title: string;

    constructor(step: WizardStep, location: { x: number }, index: number, title: string) {
        this.step = step;
        this.location = location;
        this.index = index;
        this.title = title;
    }
    static getWizardBySteps(): Array<WizardByStep> {
        return [
            new WizardByStep(WizardStep.LOCATION, { x: 0 }, 0, '1. Setup Location'),
            new WizardByStep(WizardStep.DETAIL, { x: width }, 1, '2. Enter Details'),
            new WizardByStep(WizardStep.SERVICE, { x: 2 * width }, 2, '3. Select Services'),
            new WizardByStep(WizardStep.ADDRESS, { x: 3 * width }, 3, '4. Delivery Address'),
            new WizardByStep(WizardStep.SUBMIT, { x: 4 * width }, 4, '5. Review and Submit'),
        ]
    }

    static getNext(step: WizardStep): WizardByStep {
        return this.getWizardBySteps()[step + 1];
    }

    static getPrevious(step: WizardStep): WizardByStep {
        return this.getWizardBySteps()[step - 1];
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});