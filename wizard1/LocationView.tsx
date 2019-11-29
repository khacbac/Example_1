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


interface LocationViewProps {
    onNext: () => void;
    onPrevious?: () => void;
}
export interface LocationViewState {
    address1: string;
    address1Valid?: boolean;
    address2: string;
    address2Valid?: boolean;
}

export default class LocationView extends React.Component<LocationViewProps, LocationViewState> implements IStepValid {

    constructor(props) {
        super(props);
        this.state = {
            address1: '',
            address2: '',
            address1Valid: true,
            address2Valid: true,
        }
    }

    checkValid(): boolean {
        let { address1, address2 } = this.state;
        let status: boolean = true;
        if (address1 == '') {
            this.setState({ address1Valid: false });
            status = false;
        }
        if (address2 == '') {
            this.setState({ address2Valid: false });
            status = false;
        }
        return status;
    }

    render() {
        let { address1Valid, address2Valid } = this.state;
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
                                // value={address1}
                                style={{
                                    padding: 10,
                                    borderRadius: 5,
                                    borderWidth: 1,
                                    borderColor: address1Valid ? 'gray' : 'red',
                                    fontSize: 14,
                                    marginTop: 10
                                }}
                                onChangeText={address1 => {
                                    let valid = address1 != '';
                                    this.setState({
                                        address1,
                                        address1Valid: valid
                                    });

                                }}
                            />
                            {!address1Valid && <Text style={{
                                fontSize: 12,
                                marginTop: 5,
                                color: 'red'
                            }}>This field is required.</Text>}
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
                                    borderColor: address2Valid ? 'gray' : 'red',
                                    fontSize: 14,
                                    marginTop: 10
                                }}
                                onChangeText={address2 => {
                                    let valid = address2 != '';
                                    this.setState({
                                        address2,
                                        address2Valid: valid
                                    });
                                }}
                            />
                            {!address2Valid && <Text style={{
                                fontSize: 12,
                                marginTop: 5,
                                color: 'red'
                            }}>This field is required.</Text>}
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
                        alignItems: 'flex-end',
                    }}>
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
