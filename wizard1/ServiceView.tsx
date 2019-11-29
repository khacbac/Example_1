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
} from 'react-native';
import { WizardByStep } from "../TestApp";

const { width } = Dimensions.get('window');


interface ServiceViewProps {
    onNext: () => void;
    onPrevious: () => void;
}
export interface ServiceViewState {
    packageDetail: string;
    packageDetailValid?: boolean;
    packageWeight: string;
    packageWeightValid?: boolean;
}

export default class ServiceView extends React.Component<ServiceViewProps, ServiceViewState> implements IStepValid {

    constructor(props) {
        super(props);
        this.state = {
            packageDetail: '',
            packageWeight: '',
            packageDetailValid: true,
            packageWeightValid: true,
        }
    }

    checkValid(): boolean {
        let { packageDetail, packageWeight } = this.state;
        let status: boolean = true;
        if (packageDetail == '') {
            this.setState({ packageDetailValid: false });
            status = false;
        }
        if (packageWeight == '') {
            this.setState({ packageWeightValid: false });
            status = false;
        }
        return status;
    }

    render() {
        let { packageDetailValid, packageWeightValid } = this.state;
        return (
            <ScrollView ref='scrollView'>
                <View style={{ width: width, padding: 20 }}>
                    <Text style={{
                        fontSize: 18,
                        color: 'black'
                    }}>Select your Services</Text>
                    <View style={{
                        marginTop: 20
                    }}>
                        {/* Delivery Type */}
                        <View style={{
                            marginTop: 20
                        }}>
                            <Text style={{
                                fontSize: 14
                            }}>Delivery Type</Text>
                            <TextInput
                                placeholder='Delivery Type'
                                style={{
                                    padding: 10,
                                    borderRadius: 5,
                                    borderWidth: 1,
                                    borderColor: 'gray',
                                    fontSize: 14,
                                    marginTop: 10
                                }}
                            />

                        </View>

                        {/* Packaging Type */}
                        <View style={{
                            marginTop: 20
                        }}>
                            <Text style={{
                                fontSize: 14
                            }}>Packaging Type</Text>
                            <TextInput
                                placeholder='Packaging Type'
                                style={{
                                    padding: 10,
                                    borderRadius: 5,
                                    borderWidth: 1,
                                    borderColor: 'gray',
                                    fontSize: 14,
                                    marginTop: 10
                                }}
                            />

                        </View>

                        {/* Preferred Delivery Window */}
                        <View style={{
                            marginTop: 5
                        }}>
                            <Text style={{
                                fontSize: 14
                            }}>Preferred Delivery Window</Text>
                            <TextInput
                                placeholder='Preferred Delivery Window'
                                style={{
                                    padding: 10,
                                    borderRadius: 5,
                                    borderWidth: 1,
                                    borderColor: 'gray',
                                    fontSize: 14,
                                    marginTop: 10
                                }}
                            />

                        </View>
                    </View>

                    <View style={{
                        height: 1,
                        backgroundColor: 'gray',
                        marginVertical: 30
                    }} />
                    {/* bottom button */}
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between'
                    }}>
                        <TouchableOpacity
                            onPress={() => this.props.onPrevious()}
                            style={{
                                padding: 10,
                                paddingHorizontal: 20,
                                // backgroundColor: 'blue',
                                borderRadius: 10,
                                borderWidth: 1,
                                borderColor: 'gray'
                            }}>
                            <Text style={{ color: 'black' }}>PREVIOUS</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => {
                                (this.refs.scrollView as ScrollView).scrollTo({ y: 0 });
                                this.props.onNext();
                            }}
                            style={{
                                padding: 10,
                                paddingHorizontal: 20,
                                backgroundColor: 'blue',
                                borderRadius: 10
                            }}>
                            <Text style={{ color: 'white' }}>NEXT STEP</Text>
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
