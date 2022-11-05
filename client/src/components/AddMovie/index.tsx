import { Text, View, TextInput, Button, Alert, StyleSheet } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { useCreateMovie } from "../../../hooks/useCreateMovie";

export function AddMovie() {

    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            title: '',
            picture: '',
            year: '',
            category: ''
        }
    });

    const {createMovie, loading, error, data} = useCreateMovie();

    const onSubmit = (data: any) => {
        console.log(data)
        createMovie({
            variables : {
                category: data.category,
                title: data.title,
                year: Number(data.year)
            }
        })
    }

    return (
        <View>
            <Text style={styles.label}>Title</Text>
            <Controller
                control={control}
                rules={{
                    required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        style={styles.input}
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                    />
                )}
                name="title"
            />

            <Text style={styles.label}>Picture</Text>
            <Controller
                control={control}
                rules={{
                    maxLength: 100,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        style={styles.input}
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                    />
                )}
                name="picture"
            />

            <Text style={styles.label}>Category</Text>
            <Controller
                control={control}
                rules={{
                    maxLength: 100,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        style={styles.input}
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                    />
                )}
                name="category"
            />

            <Text style={styles.label}>Year</Text>
            <Controller
                control={control}
                rules={{
                    maxLength: 100,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        style={styles.input}
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                    />
                )}
                name="year"
            />

            <Button title="Submit" onPress={handleSubmit(onSubmit)} />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        textAlign: 'left',
        backgroundColor: 'solid',
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 10,
        height: 40,
        padding: 5
    },

    label: {
        marginBottom: 5
    }
})