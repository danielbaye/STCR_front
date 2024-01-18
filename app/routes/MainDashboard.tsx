import React, { useEffect, useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { styles } from "../styles"
import ScrollableTable from '../components/ScrollableTable';
import Swiper from 'react-native-swiper';
import { useApiClient } from '../services/ApiService';
import { GroupingTable } from '../components/GroupingTable';

type TableData = {
    tableName: string,
    data: any
}

const SwipeableCard = ({ tableName, headers, tableData }) => (
    <View  >
        <Text style={styles.text}>{tableName}</Text>
        <GroupingTable data={tableData} headers={headers} />
    </View>
);

export const MainDashboard: React.FC = () => {

    const apiClient = useApiClient();

    const [loading, setLoading] = useState<boolean>(false);
    const [tableHeaders, setTableHeaders] = useState<string[]>(null)
    const [tableData, setTableData] = useState<string[][][]>(null)
    const lastMonth = new Date()
    lastMonth.setDate((new Date()).getDate() - 30);

    const [startDate, setStartDate] = useState<Date>(lastMonth)
    const [endDate, setEndDate] = useState<Date>(new Date)
    const [currentPage, setPage] = useState<number>(0)
    const apiFunctions = [apiClient.getMainTable, apiClient.getSeconderyTable]
    const loadPage = async () => {
        setLoading(true)
        const { headers, data } = await apiFunctions[currentPage](startDate, endDate)
        setTableHeaders(headers)
        setTableData(data)
        setLoading(false)
    }

    useEffect(() => {
        loadPage()
    }, [currentPage, endDate, startDate])

    const cards =
        [
            { id: 1, data: { tableName: "table1", data: tableData, headers: tableHeaders } },
            { id: 2, data: { tableName: "table2", data: tableData, headers: tableHeaders } },
            { id: 3, data: { tableName: "table1", data: tableData, headers: tableHeaders } },
            { id: 4, data: { tableName: "table1", data: tableData, headers: tableHeaders } },
            { id: 5, data: { tableName: "table1", data: tableData, headers: tableHeaders } },
            { id: 6, data: { tableName: "table1", data: tableData, headers: tableHeaders } },
            { id: 7, data: { tableName: "table1", data: tableData, headers: tableHeaders } },
            { id: 8, data: { tableName: "table1", data: tableData, headers: tableHeaders } },
            { id: 9, data: { tableName: "table1", data: tableData, headers: tableHeaders } },
            { id: 10, data: { tableName: "table1", data: tableData, headers: tableHeaders } },
            { id: 11, data: { tableName: "table1", data: tableData, headers: tableHeaders } },

        ];
    return (
        <View style={styles.container}>
            <Swiper loop={false}>
                {cards.map((card) => (
                    <SwipeableCard key={card.id} tableData={card.data.data} headers={card.data.headers} tableName={card.data.tableName} />
                ))}

            </Swiper>
        </View>


    )
}


