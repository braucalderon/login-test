import React, { useState} from 'react';

import { Modal } from 'react-native';


const ModalComponent = () => {
    const [modalVisible, setModalVisible] = useState(false);

    return
    <Modal
    animationType='slide'
    visible={modalVisible}
    onRequestClose={() => {setModalVisible(!modalVisible)}}
    >


     
    </Modal>
}
export default ModalComponent