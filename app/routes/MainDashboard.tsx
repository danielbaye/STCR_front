import React, { useEffect, useState } from 'react';
import { ScrollView, Text, View, Button } from 'react-native';
import { styles } from "../styles"
import ScrollableTable from '../components/ScrollableTable';
import Swiper from 'react-native-swiper';
import { useApiClient } from '../services/ApiService';
import { GroupingTable } from '../components/GroupingTable';
import { mainPageTable } from '../types/tableTypes';


const SwipeableCard = ({ tableName, headers, tableData }) => (
    <View  >
        <Text style={styles.text}>{tableName}</Text>
        <GroupingTable data={tableData} headers={headers} />
    </View>
);

export const MainDashboard: React.FC = () => {

    const apiClient = useApiClient();

    const [loading, setLoading] = useState<boolean>(false);
    const [tableData, setTableData] = useState<mainPageTable[]>([])
    const lastMonth = new Date()
    lastMonth.setDate((new Date()).getDate() - 30);

    const [startDate, setStartDate] = useState<Date>(lastMonth)
    const [endDate, setEndDate] = useState<Date>(new Date)
    const [currentPage, setPage] = useState<number>(0)
    const apiFunctions = [apiClient.getMainTable, apiClient.getSeconderyTable]
    const loadPage = async () => {
        setLoading(true)

        const ddata: mainPageTable[] = await Promise.all(apiFunctions.map(api => api(startDate, endDate)))

        setTableData(ddata)
        setLoading(false)
    }

    useEffect(() => {
        loadPage()
    }, [currentPage, endDate, startDate])


    const cards = tableData.map((tbl, index) => { return { id: index, data: { tableName: tbl.tableName, data: tbl.data, headers: tbl.headers } } })

    const handleStartDateChange = (date) => {
        setStartDate(date);
    };

    const handleEndDateChange = (date) => {
        console.log(date)
        setEndDate(date);
    };

    const handleSwipe = (index) => {
        console.log(index)
        setPage(index)
    }
    const handleDecreaseDate = () => {
        const tomorrow = new Date(startDate);
        tomorrow.setDate(tomorrow.getDate() - 1);
        setStartDate(tomorrow)
    }

    return (
        <View style={styles.container} >
            <Text style={styles.text}> {`start Date:: ${startDate.toLocaleDateString()}`}</Text>
            <Button title="++" onPress={handleDecreaseDate} />
            <Swiper loop={false}
            >
                {cards.map((card) => (
                    <SwipeableCard key={card.id} tableData={card.data.data} headers={card.data.headers} tableName={card.data.tableName} />
                ))}
            </Swiper>
        </View>


    )
}


