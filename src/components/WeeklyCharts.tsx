import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import appColors from '../constants/color';

const WeeklyChart = () => {
    return (
        <View style={styles.chartContainer}>
            <View style={styles.chartHeader}>
                <Text style={styles.chartTitle}>Weekly Overview</Text>
            </View>

            <View style={styles.chartContent}>
                <View style={styles.yAxisLabels}>
                    <Text style={styles.axisLabel}>$50</Text>
                    <Text style={styles.axisLabel}>$30</Text>
                    <Text style={styles.axisLabel}>$10</Text>
                </View>

                <View style={styles.chartArea}>
                    {/* Simplified chart representation */}
                    <View style={styles.chartLine}>
                        <View style={[styles.chartBar, { height: 20 }]} />
                        <View style={[styles.chartBar, { height: 35 }]} />
                        <View style={[styles.chartBar, { height: 15 }]} />
                        <View style={[styles.chartBar, { height: 45 }]} />
                        <View style={[styles.chartBar, { height: 60 }]} />
                        <View style={[styles.chartBar, { height: 25 }]} />
                        <View style={[styles.chartBar, { height: 40 }]} />
                    </View>

                    {/* Highlighted point */}
                    <View style={styles.highlightPoint}>
                        <View style={styles.highlightDot} />
                        <View style={styles.highlightLine} />
                        <View style={styles.highlightInfo}>
                            <Text style={styles.highlightValue}>20 Solve</Text>
                            <Text style={styles.highlightDate}>Monday, April 22nd</Text>
                        </View>
                    </View>
                </View>
            </View>

            <View style={styles.chartFooter}>
                <Text style={styles.performanceText}>30%</Text>
                <View style={styles.performanceRight}>
                    <Text style={styles.performanceSubtext}>
                        Your sales performance is 30% better compared to last month
                    </Text>
                </View>
            </View>
        </View>
    );
};

export default WeeklyChart;


const styles = StyleSheet.create({
    chartContainer: {
        backgroundColor: appColors.white,
        borderRadius: 20,
        padding: 20,
        marginBottom: 10,
        elevation: 3,
        shadowColor: appColors.black,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    chartHeader: {
        marginBottom: 20,
    },
    chartTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: appColors.textPrimary,
        textAlign: 'center',
    },
    chartContent: {
        flexDirection: 'row',
        height: 120,
        marginBottom: 20,
    },
    yAxisLabels: {
        justifyContent: 'space-between',
        paddingRight: 10,
    },
    axisLabel: {
        fontSize: 12,
        color: appColors.textSecondary,
    },
    chartArea: {
        flex: 1,
        position: 'relative',
    },
    chartLine: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-around',
        height: '100%',
    },
    chartBar: {
        width: 8,
        backgroundColor: appColors.border,
        borderRadius: 4,
    },
    highlightPoint: {
        position: 'absolute',
        top: 20,
        right: 30,
        alignItems: 'center',
    },
    highlightDot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: appColors.primary,
        marginBottom: 5,
    },
    highlightLine: {
        width: 2,
        height: 40,
        backgroundColor: appColors.primary,
        marginBottom: 10,
    },
    highlightInfo: {
        backgroundColor: appColors.primary,
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 6,
        alignItems: 'center',
    },
    highlightValue: {
        color: appColors.white,
        fontSize: 12,
        fontWeight: 'bold',
    },
    highlightDate: {
        color: appColors.white,
        fontSize: 10,
        opacity: 0.8,
    },
    chartFooter: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: 5,
    },
    performanceRight: {
        flex: 1,
        paddingLeft: 10,
    },

    performanceText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: appColors.textPrimary,
        marginBottom: 5,
    },
    performanceSubtext: {
        fontSize: 12,
        color: appColors.textSecondary,
        lineHeight: 15,
    },
    chartSpacing: {
        height: 20,
    },
})