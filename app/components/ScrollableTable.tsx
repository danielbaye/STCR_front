import React, { useState } from 'react';
import { View, ScrollView, Text, Pressable } from 'react-native';
import { styles } from "../styles"
import { Table, Row, Rows } from 'react-native-table-component';

const ScrollableTable = ({ data }) => {
    if (!data || data.length === 0) {
        return null; // Handle case when no data is provided
    }
    const headerRow = data[0];

    const handleOnClick = () => {
        setOpen(!open)
    }
    const [open, setOpen] = useState<boolean>(false)
    const datarows = <Rows data={data.slice(1)} style={styles.row} textStyle={styles.text} />
    return (
        <View>
            <Table borderStyle={{ borderWidth: 1, borderColor: '#C1C0B9' }}>
                <Pressable onPress={handleOnClick}>
                    <Row data={headerRow} style={styles.row} textStyle={styles.text} />
                    <Row data={[open ? "+" : "-"]} style={styles.row} textStyle={styles.text} />
                </Pressable>
                {open ? datarows : <Rows data={[[]]} style={styles.row} textStyle={styles.text} />}
            </Table>


           
        </View>
    );
};

export default ScrollableTable;
