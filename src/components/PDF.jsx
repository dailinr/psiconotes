import { Document, Font, Text, Page, StyleSheet, Image, View } from "@react-pdf/renderer"
import logo from './mas_info_estud.png'

Font.register({
    family: 'Inter-Bold',
    src: './Inter-Bold.ttf' 
});

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
        fontSize: 14,
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
        fontWeight: 'bold',
        color: 'darkblue',
    },
    boldText: {
        fontWeight: 'bold',
        
    },
    dataText: {
        color: 'black', 
        fontSize: 15,
    },
    contObs: {
        marginTop: 20,
        padding: 10
    },
    observacion: {
        fontSize: 20,
        color: 'darkblue',
        marginBottom: 10,
      },

})


export const PDF = ({ nombre, fecha, hora, observacion }) => {
    return (
        <Document style={styles.doc}>
            <Page style={styles.page}>

                <Text style={styles.titulo}>Informe del estudiante</Text>
                
                <View style={styles.section}> 
                    <Image style={styles.img} src={logo}/> 

                    <View style={styles.textContainer}>
                        <Text style={styles.info}>Nombre del paciente: <Text style={styles.dataText}>{nombre}</Text></Text>
                        <Text style={styles.info}>Edad: <Text style={styles.dataText}>{nombre}</Text></Text>
                        <Text style={styles.info}>Fecha de la sesión: <Text style={styles.dataText}>{fecha}</Text></Text>
                        <Text style={styles.info}>Duración de la sesión:  </Text>
                        <Text style={[styles.info, styles.boldText]}>Psicóloga a cargo: <Text style={styles.dataText}>Fulanita perez</Text></Text>
                        
                        
                    </View>    
                    
                </View>
                
                <View style={styles.contObs}>
                    <Text style={styles.observacion}>Observaciones: </Text>
                    <Text style={styles.observ}>{observacion}</Text>
                </View> 


                <View style={styles.pageNumber} >
                    <Text render={ ( {pageNumber, totalPages }) => `${pageNumber} / ${totalPages}` }> </Text>
                </View>

            </Page>
        </Document>
    )
};