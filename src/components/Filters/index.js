import { Col, Row, Input, Typography, Radio, Select, Tag } from 'antd';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
// import { searchFilterChange,statusFilterChange, priorityFilterChange } from '../../redux/actions/action';
import FilterSlice from './filterSlice';
const { Search } = Input;

export default function Filters() {
  const dispatch = useDispatch()

  //Handle filter via text
  const [searchText, setSearchText] = useState('')
  const [statusFilter, setStatusFilter] = useState('All')

  const handleSearchTextChange = function(e){
    setSearchText(e.target.value)
    dispatch(FilterSlice.actions.searchFilterChange(e.target.value))
  }
  //Handle filter via text
  //Handle filter via status
  const handleStatusChagne = function(e){
    setStatusFilter(e.target.value)
    dispatch(FilterSlice.actions.statusFilterChange(e.target.value))
  }
  //Handle filter via status
  //Handle filter via priority
  const [prioritiesFilter, setPrioritiesFilter] = useState([])
  const handlePriorityChange = function(value){
    setPrioritiesFilter(value)
    dispatch(FilterSlice.actions.priorityFilterChange(value))
  }
  //Handle filter via priority
  return (
    <Row justify='center'>
      <Col span={24}>
        <Typography.Paragraph
          style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
        >
          Search
        </Typography.Paragraph>
        <Search placeholder='input search text' value={searchText} onChange={handleSearchTextChange}/>
      </Col>
      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
        >
          Filter By Status
        </Typography.Paragraph>
        <Radio.Group value={statusFilter} onChange={handleStatusChagne}>
          <Radio value='All'>All</Radio>
          <Radio value='Completed'>Completed</Radio>
          <Radio value='Todo'>To do</Radio>
        </Radio.Group>
      </Col>
      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
        >
          Filter By Priority
        </Typography.Paragraph>
        <Select
          mode='multiple'
          allowClear
          placeholder='Please select'
          style={{ width: '100%' }}
          value={prioritiesFilter}
          onChange={handlePriorityChange}
        >
          <Select.Option value='High' label='High'>
            <Tag color='red'>High</Tag>
          </Select.Option>
          <Select.Option value='Medium' label='Medium'>
            <Tag color='blue'>Medium</Tag>
          </Select.Option>
          <Select.Option value='Low' label='Low'>
            <Tag color='gray'>Low</Tag>
          </Select.Option>
        </Select>
      </Col>
    </Row>
  );
}
