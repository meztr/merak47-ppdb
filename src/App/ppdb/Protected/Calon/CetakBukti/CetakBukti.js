import React from 'react';
import {PDFDownloadLink, Document, Page,Text, StyleSheet, View} from '@react-pdf/renderer';

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


function Formulir() {
  return (
    <div>
      <Document>
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
    </div>
  );
}

const CetakBukti = () => (
  <div>
    <PDFDownloadLink document={<Formulir />} fileName="somename.pdf">
      {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download now!')}
    </PDFDownloadLink>
  </div>
)

export default Formulir;