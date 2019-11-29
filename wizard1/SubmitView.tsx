import * as React from 'react';
import {
    StyleSheet,
    View,
    ScrollView,
    TouchableOpacity,
    Text,
    Dimensions
} from 'react-native';
import { LocationViewState } from './LocationView';
import { DetailViewState } from './DetailView';

interface Props {

}
interface SubmitState {
    locationState: LocationViewState;
    detailState: DetailViewState;
}

const { width } = Dimensions.get('window');
export default class SubmitView extends React.Component<Props, SubmitState> {

    constructor(props) {
        super(props);
        this.state = {
            locationState: { address1: '', address2: '' },
            detailState: { packageDetail: '', packageWeight: '' },
        }
    }

    setViewState = (locationState: LocationViewState, detailState: DetailViewState) => {
        this.setState({ locationState, detailState });
    }

    render() {
        return (
            <ScrollView>
                <View style={{ width: width, padding: 20 }}>
                    <Text style={{
                        fontSize: 18,
                        color: 'black'
                    }}>Review your Details and Submit</Text>

                    {/* Current Address */}
                    <View style={{
                        marginTop: 20
                    }}>

                        <Text style={{
                            fontSize: 16,
                            color: 'black'
                        }}>Current Address</Text>

                        <Text style={{
                            fontSize: 12,
                            marginTop: 5
                        }}>{this.state.locationState.address1}</Text>
                        <Text style={{
                            fontSize: 12,
                            marginTop: 5
                        }}>{this.state.locationState.address2}</Text>
                        <Text style={{
                            fontSize: 12,
                            marginTop: 5
                        }}>Melbourne 3000, VIC, Australia</Text>
                    </View>

                    <View style={{ height: 1, backgroundColor: 'gray', marginVertical: 10 }} />

                    {/* Delivery Details */}
                    <View style={{
                        // marginTop: 20
                    }}>

                        <Text style={{
                            fontSize: 16,
                            color: 'black'
                        }}>Delivery Details</Text>

                        <Text style={{
                            fontSize: 12,
                            marginTop: 5
                        }}>{`Package: ${this.state.detailState.packageDetail}`}</Text>
                        <Text style={{
                            fontSize: 12,
                            marginTop: 5
                        }}>{`Weight: ${this.state.detailState.packageWeight}`}</Text>
                        <Text style={{
                            fontSize: 12,
                            marginTop: 5
                        }}>Dimensions: 110cm (w) x 90cm (h) x 150cm (L)</Text>
                    </View>

                    <View style={{ height: 1, backgroundColor: 'gray', marginVertical: 10 }} />

                    {/* Delivery Service Type */}
                    <View style={{
                        // marginTop: 20
                    }}>

                        <Text style={{
                            fontSize: 16,
                            color: 'black'
                        }}>Delivery Service Type</Text>

                        <Text style={{
                            fontSize: 12,
                            marginTop: 5
                        }}>{'Overnight Delivery with Regular Packaging'}</Text>
                        <Text style={{
                            fontSize: 12,
                            marginTop: 5
                        }}>
                            Preferred Morning (8:00AM - 11:00AM) Delivery
                    </Text>
                    </View>

                    <View style={{ height: 1, backgroundColor: 'gray', marginVertical: 10 }} />

                    {/* Delivery Address */}
                    <View style={{
                        // marginTop: 20
                    }}>

                        <Text style={{
                            fontSize: 16,
                            color: 'black'
                        }}>Delivery Address</Text>

                        <Text style={{
                            fontSize: 12,
                            marginTop: 5
                        }}>{'Address Line 1'}</Text>
                        <Text style={{
                            fontSize: 12,
                            marginTop: 5
                        }}>
                            Address Line 2
                    </Text>
                        <Text style={{
                            fontSize: 12,
                            marginTop: 5
                        }}>
                            Preston 3072, VIC, Australia
                    </Text>
                    </View>

                    <View style={{
                        height: 1,
                        backgroundColor: 'gray',
                        marginVertical: 30
                    }} />
                    {/* bottom button */}
                    <View style={{
                        alignItems: 'flex-end'
                    }}>
                        <TouchableOpacity
                            onPress={() => {
                                // let { wByStep } = this.state;
                                // let next = WizardByStep.getNext(wByStep.step)
                                // this._getScrollView().scrollTo(next.location);
                                // this.setState({
                                //     wByStep: next
                                // });
                            }}
                            style={{
                                padding: 10,
                                paddingHorizontal: 20,
                                backgroundColor: 'green',
                                borderRadius: 10
                            }}>
                            <Text style={{ color: 'white' }}>SUBMIT</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});