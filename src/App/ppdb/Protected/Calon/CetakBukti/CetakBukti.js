import React, { useEffect } from 'react';
import { Button, Row, Col } from 'react-bootstrap';
import {pdf, PDFDownloadLink, Document, Page,Text, StyleSheet, View} from '@react-pdf/renderer';
import Aux from '../../../../hoc/_Aux';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
});


const Formulir = (props) => (  
  <Document title="test"
    author="Panitia PPDB 2020 SMK Muhammadiyah Sampit"
    subject="Cetak Bukti Registrasi PPDB Online"
  >
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>Section #1</Text>
        <Text>Section #1</Text>
      </View>
      <View style={styles.section}>
        <Text>Section #2</Text>
        <Text>Section #2</Text>
      </View>
    </Page>
  </Document>  
)

const Cetak = () => (
  savePDF(<Formulir/>, 'cetak.pdf')
)


// const CetakBukti = () => (
//   // <div>
//   //   <PDFDownloadLink document={<Formulir />} fileName="somename.pdf">
//   //     {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download now!')}
//   //   </PDFDownloadLink>
//   // </div>
// );

// function CetakBukti() {
//   const [bukti, setBukti] = useState(null);
//   useEffect( async () => {
//     const saveBlob1 = await pdf(document).toBlob(), fileName);
//   )
// }

const saveBlob = (blob, filename) => {
  var a = document.createElement("a");
  document.body.appendChild(a);
  a.style.display = "none";
  let url = window.URL.createObjectURL(blob);
  a.href = url;
  a.download = filename;
  a.click();
  window.URL.revokeObjectURL(url);
};

export const savePDF = async(document, fileName) => {
  saveBlob(await pdf(document).toBlob(), fileName);
}

// ReactPDF.render(CetakBukti);
export default Cetak;