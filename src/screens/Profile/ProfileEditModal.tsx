import { View, Text, Modal, TouchableOpacity, Dimensions, TextInput } from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons'
import { useUpdateProfileMutation } from 'src/redux/features/Profile/profileApi'
const { height } = Dimensions.get("screen")

const ProfileEditModal = ({ visible, onClose, Title }: any) => {

    const [fName, setFname] = useState("")
    const [lName, setLname] = useState("")
    const [phone, setPhone] = useState("")
    const [alowPush, setAlowPush] = useState("")
    const [newEmail, setNewEmail] = useState("")
    const [current_password, setCurrentPassword] = useState("")
    const [new_password, setNewPassword] = useState("")
    const [propic, setPropic] = useState("")
    const [updateProfileInfo] = useUpdateProfileMutation()

    const handleSave = async () => {
        const formData = new FormData();

        const info = {
            first_name: fName,
            last_name: lName,
            phone_number: phone,
            allow_push_notifications: alowPush,
            new_email: newEmail,
            current_password: current_password,
            new_password: new_password,


        }

        for (const key in info) {
            if (info.hasOwnProperty(key)) {
                formData.append(key, info[key])
            }
        }
        try {
            const res = await updateProfileInfo(formData).unwrap()
            console.log(res, "in modal")
            onClose()
        } catch (err) {
            console.log(err)
        }


    }
    return (
        <Modal visible={visible} onRequestClose={onClose} animationType='slide' transparent>
            <View className='flex-1 justify-end bg-black-50 m-4'>
                <View className={`bg-violet-100 h-${height * 0.6}  p-3 rounded-lg`}>
                    <View className='flex-row justify-between w-full'>
                        <Text className='text-2xl'>Profile Edit</Text>
                        <TouchableOpacity onPress={onClose}>
                            <Ionicons name="close-circle-outline" size={34} color="gray" />
                        </TouchableOpacity>
                    </View>
                    {Title == "Full Name" && (<><Text className='mt-2 mb-2 text-xl'>First Name</Text>
                        <TextInput className='bg-white p-2 mt-2 mb-2 ' placeholder='First Name' onChangeText={setFname} />
                        <Text className='mt-2 mb-2 text-xl'>Last Name</Text>
                        <TextInput className='bg-white p-2 mt-2 mb-2 ' placeholder='First Name' onChangeText={setLname} /></>)}


                    <View className='flex-row items-center justify-center gap-4'>
                        <TouchableOpacity className='flex-1 items-center justify-center bg-green-400 p-3 rounded-lg' onPress={handleSave}><Text>Save</Text></TouchableOpacity>
                        <TouchableOpacity className='flex-1 items-center justify-center bg-red-400 p-3 rounded-lg' onPress={onClose}><Text>Cancel</Text></TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default ProfileEditModal