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


interface AddressViewProps {
    onNext: () => void;
    onPrevious: () => void;
}
export interface AddressViewState {
    packageDetail: string;
    packageDetailValid?: boolean;
    packageWeight: string;
    packageWeightValid?: boolean;
}

export default class AddressView extends React.Component<AddressViewProps, AddressViewState> implements IStepValid {

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
                    }}>Setup Your Current Location</Text>
                    <View style={{
                        marginTop: 20
                    }}>
                        {/* Address Line 1 */}
                        <View style={{
                            marginTop: 20
                        }}>
                            <Text style={{
                                fontSize: 14
                            }}>Address Line 1</Text>
                            <TextInput
                                placeholder='Address Line 1'
                                style={{
                                    padding: 10,
                                    borderRadius: 5,
                                    borderWidth: 1,
                                    borderColor: 'gray',
                                    fontSize: 14,
                                    marginTop: 10
                                }}
                            />
                            <Text style={{
                                fontSize: 12,
                                marginTop: 5
                            }}>Please enter your Address.</Text>
                        </View>

                        {/* Address Line 2 */}
                        <View style={{
                            marginTop: 20
                        }}>
                            <Text style={{
                                fontSize: 14
                            }}>Address Line 2</Text>
                            <TextInput
                                placeholder='Address Line 2'
                                style={{
                                    padding: 10,
                                    borderRadius: 5,
                                    borderWidth: 1,
                                    borderColor: 'gray',
                                    fontSize: 14,
                                    marginTop: 10
                                }}
                            />
                            <Text style={{
                                fontSize: 12,
                                marginTop: 5
                            }}>Please enter your Address.</Text>
                        </View>

                        {/* Postcode */}
                        <View style={{
                            marginTop: 20,
                        }}>
                            {/* Postcode */}
                            <Text style={{
                                fontSize: 14
                            }}>Postcode</Text>
                            <TextInput
                                placeholder='Postcode'
                                style={{
                                    padding: 10,
                                    borderRadius: 5,
                                    borderWidth: 1,
                                    borderColor: 'gray',
                                    fontSize: 14,
                                    marginTop: 10
                                }}
                            />
                            <Text style={{
                                fontSize: 12,
                                marginTop: 5
                            }}>Please enter your Postcode.</Text>
                        </View>

                        {/* City */}
                        <View style={{
                            marginTop: 20,
                        }}>
                            {/* City */}
                            <Text style={{
                                fontSize: 14
                            }}>City</Text>
                            <TextInput
                                placeholder='City'
                                style={{
                                    padding: 10,
                                    borderRadius: 5,
                                    borderWidth: 1,
                                    borderColor: 'gray',
                                    fontSize: 14,
                                    marginTop: 10
                                }}
                            />
                            <Text style={{
                                fontSize: 12,
                                marginTop: 5
                            }}>Please enter your City.</Text>
                        </View>

                        {/* State */}
                        <View style={{
                            marginTop: 20,
                        }}>
                            <Text style={{
                                fontSize: 14
                            }}>State</Text>
                            <TextInput
                                placeholder='State'
                                style={{
                                    padding: 10,
                                    borderRadius: 5,
                                    borderWidth: 1,
                                    borderColor: 'gray',
                                    fontSize: 14,
                                    marginTop: 10
                                }}
                            />
                            <Text style={{
                                fontSize: 12,
                                marginTop: 5
                            }}>Please enter your State.</Text>

                        </View>

                        {/*  Country*/}
                        <View style={{
                            marginTop: 20,
                        }}>
                            <Text style={{
                                fontSize: 14
                            }}>Country</Text>
                            <TextInput
                                placeholder='Country'
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
