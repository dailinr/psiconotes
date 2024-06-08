import { Document, Font, Text, Page, StyleSheet, Image, View } from "@react-pdf/renderer"
import logo from './mas_info_estud.png'

Font.register({
    family: 'Inter-Bold',
    src: './Inter-Bold.ttf' // Ruta a tu archivo de fuente
});

// Personalizamos los estilos del doc PDF
const styles = StyleSheet.create({

    page: {
        backgroundColor: 'white',
        padding: 30,
    }, 

    titulo :{
        fontSize: '30px',
        textAlign: "center",
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#343C6A'
    },
    img : {
        width: 100,
        height: 100,
        marginRight: 20
    },
    section : {  
        margin: 10,
        padding: 10,
        flexGrow: 1,
        flexDirection: 'row',
        alignItems: 'flex-start'
    },
    textContainer: {
        flexGrow: 1,
    },

    pageNumber: {
        position: 'absolute',
        fontSize: 12,
        bottom: 20,
        left: 0,
        right: 0,
        textAlign: 'center',
        color: 'grey'
    },
    info : {
        display: 'block',
        marginBottom: 10,
        fontSize: '16px',
        fontWeight: 'bold'
    },
    boldText: {
        fontWeight: 'bold',
    }

})


export const PDF = ({ nombre, fecha, hora }) => {
    return (
        <Document style={styles.doc}>
            <Page style={styles.page}>

                <Text style={styles.titulo}>Informe del estudiante</Text>
                
                <View style={styles.section}> {/* contenedor de cada pagina*/} 
                    <Image style={styles.img} src={logo}/> 

                    <View style={styles.textContainer}>
                        <Text style={styles.info}>Nombre del paciente: {nombre} </Text>
                        <Text style={styles.info}>Edad: </Text>
                        <Text style={styles.info}>Fecha de la sesión: {fecha}</Text>
                        <Text style={styles.info}>Duración de la sesión:  </Text>
                        <Text style={[styles.info, styles.boldText]}>Psicóloga a cargo: </Text>
                    </View>
                </View>

                {/* numeracion de la pagina */}
                <View styles={styles.pageNumber} >
                    <Text render={ ( {pageNumber, totalPages }) => `${pageNumber} / ${totalPages}` }> </Text>
                </View>

            </Page>
        </Document>
    )
};