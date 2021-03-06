import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class Footer extends React.Component {
  render() {
    const { filter, tasksLeft } = this.props;
    return (
      <View style={styles.container}>
        <Text>{tasksLeft} left to do</Text>
        <View style={styles.filters}>
          <TouchableOpacity style={[styles.filter, filter === 'all' && styles.selected]} onPress={() => this.props.onFilter('all')}>
            <Text>All</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.filter, filter === 'active' && styles.selected]} onPress={() => this.props.onFilter('active')}>
            <Text>Active</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.filter, filter === 'completed' && styles.selected]} onPress={() => this.props.onFilter('completed')}>
            <Text>Completed</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => this.props.onClearComplete()}>
          <Text>Clear completed</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  filters: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  filter: {
    padding: 8,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'transparent',
  },
  selected: {
    borderColor: 'rgba(175, 47, 47, .2)',
  },
})