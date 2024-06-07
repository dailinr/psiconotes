import {
    Document,
    Text,
    Page,
    StyleSheet,
    Image,
    View
} from '@react-pdf/renderer'
// import logo from './icon_student.png'

// Personalizamos los estilos del doc PDF
const styles = StyleSheet.create({
    
    page: {
        backgroundColor: 'black',
        padding: 30
    }, 

    tittle :{
        fontSize: 10,
        fontFamily: 'system iu',
        textAlign: "center",
        fontWeight: 500
    },

    section: {
        display: "flex",
        flexDirection: "row",
        margin: 10,
        padding: 10,
        flexGrow: 1
    },

    pageNumber: {
        position: 'absolute',
        fontSize: 12,
        bottom: 20,
        left: 0,
        right: 0,
        textAlign: 'center',
        color: 'grey'
    }

})

function PDF (){

    return (
        <Document>
            <Page style={styles.page}>

                <Text style={styles.tittle}> Informacion del Estudiante</Text>

                <View style={styles.section}> {/* contenedor*/} 
                    {/* <Image src={logo}/> */}
                    <Text> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt sequi aut delectus aliquam, 
                        adipisci laudantium obcaecati vero nihil ipsum quos esse assumenda quae libero nulla iusto quo, 
                        animi pariatur odio?
                    </Text>
                </View>

                {/* Otra pagina */}
                <View styles={styles.pageNumber} >
                    <Text render={ ( {pageNumber, totalPages }) => `${pageNumber} / ${totalPages}` }> </Text>
                </View>
            </Page>
            
        </Document>
    )
}

export default PDF;