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


interface DetailViewProps {
    onNext?: () => void;
    onPrevious?: () => void;
}
export interface DetailViewState {
    packageDetail: string;
    packageDetailValid?: boolean;
    packageWeight: string;
    packageWeightValid?: boolean;
}

export default class DetailView extends React.Component<DetailViewProps, DetailViewState> implements IStepValid {

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
                    }}>Enter the Details of your Delivery</Text>
                    <View style={{
                        marginTop: 20
                    }}>
                        {/* Package Details */}
                        <View style={{
                            marginTop: 20
                        }}>
                            <Text style={{
                                fontSize: 14
                            }}>Package Details</Text>
                            <TextInput
                                placeholder='Package Details'
                                style={{
                                    padding: 10,
                                    borderRadius: 5,
                                    borderWidth: 1,
                                    borderColor: packageDetailValid ? 'gray' : 'red',
                                    fontSize: 14,
                                    marginTop: 10
                                }}
                                onChangeText={packageDetail => {
                                    let valid = packageDetail != '';
                                    this.setState({
                                        packageDetail,
                                        packageDetailValid: valid
                                    });
                                }}
                            />
                            {!packageDetailValid && <Text style={{
                                fontSize: 12,
                                marginTop: 5,
                                color: 'red'
                            }}>This field is required.</Text>}
                            <Text style={{
                                fontSize: 12,
                                marginTop: 5
                            }}>Please enter your Pakcage Details.</Text>
                        </View>

                        {/* Package Weight in KG */}
                        <View style={{
                            marginTop: 20
                        }}>
                            <Text style={{
                                fontSize: 14
                            }}>Package Weight in KG</Text>
                            <TextInput
                                placeholder='Package Weight in KG'
                                style={{
                                    padding: 10,
                                    borderRadius: 5,
                                    borderWidth: 1,
                                    borderColor: packageWeightValid ? 'gray' : 'red',
                                    fontSize: 14,
                                    marginTop: 10
                                }}
                                onChangeText={packageWeight => {
                                    let valid = packageWeight != '';
                                    this.setState({
                                        packageWeight,
                                        packageWeightValid: valid
                                    });
                                }}
                            />
                            {!packageWeightValid && <Text style={{
                                fontSize: 12,
                                marginTop: 5,
                                color: 'red'
                            }}>This field is required.</Text>}
                            <Text style={{
                                fontSize: 12,
                                marginTop: 5
                            }}>Please enter your Package Weight in KG.</Text>
                        </View>

                        {/* Package Dimensions */}
                        <Text style={{
                            fontSize: 14,
                            marginTop: 20
                        }}>Package Dimensions</Text>
                        {/* Package Width in CM */}
                        <View style={{
                            marginTop: 5
                        }}>
                            <Text style={{
                                fontSize: 14
                            }}>Package Width in CM</Text>
                            <TextInput
                                placeholder='Package Width in CM'
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
                            }}>Please enter your Package Width in CM.</Text>
                        </View>

                        {/* Package Height in CM */}
                        <View style={{
                            marginTop: 20
                        }}>
                            <Text style={{
                                fontSize: 14
                            }}>Package Height in CM</Text>
                            <TextInput
                                placeholder='Package Height in CM'
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
                            }}>Please enter your Package Height in CM.</Text>
                        </View>

                        {/* Package Length in CM*/}
                        <View style={{
                            marginTop: 20
                        }}>
                            <Text style={{
                                fontSize: 14
                            }}>Package Length in CM</Text>
                            <TextInput
                                placeholder='Package Length in CM'
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
                            }}>Please enter your Package Length in CM.</Text>
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
