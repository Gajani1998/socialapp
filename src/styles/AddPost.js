import styled from 'styled-components';

export const InputWrapper = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    width: 100%;
   
    background-color: #FFF;
`;

export const InputField = styled.TextInput`
   
    font-size: 24px;
    text-align: center;
    width:90%;
    margin-top: -60px;
`;

export const AddImage = styled.Image`
    width: 100%;
    height: 250px;
    margin-top:-20px;
   
`;

export const StatusWrapper = styled.View`
    justify-content: center;
    align-items: center;
`;

export const SubmitBtn = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: center;
    border-radius: 5px;
    padding: 10px 25px;
`;

export const SubmitBtnText = styled.Text`
    font-size: 22px;
    font-family: 'Lato-Bold';
    font-weight: bold;
    color: #FF3C85;
`;