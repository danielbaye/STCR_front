import React from 'react';
import { View, ScrollView, Text } from 'react-native';
import { styles } from "../styles"
import ScrollableTable from './ScrollableTable';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Table, Row, Rows } from 'react-native-table-component';


export const GroupingTable: React.FC<{ data: string[][][], headers: string[] }> = ({
    data,
    headers
}) => {
    if (!data || data.length === 0 || !headers || headers.length === 0) {
        return null; // Handle case when no data is provided
    }
    if (!data || data.length === 0) {
        return null; // Handle case when no data is provided
    }
    const stop = 0
    const maxColumnWidths = []
    data.forEach(table => {
        table.forEach(row => {
            row.forEach((cell, index) => {
                maxColumnWidths[index] = Math.max(maxColumnWidths[index] ? maxColumnWidths[index] : 0, cell.length)
            })
        })
    })



    return (
        <SafeAreaView style={[styles.safeArea, { padding: 10 }]}>

            <ScrollView horizontal={true} >

                <View style={[styles.container, {}]}>
                    <Table borderStyle={{ borderWidth: 1, borderColor: '#C1C0B9' }}>
                        <Row data={headers} style={styles.row} textStyle={styles.text} />
                        {data.map((tbl, index) => (
                            <View key={index}>
                                <ScrollableTable data={tbl} />
                            </View>
                        ))}
                    </Table>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};
