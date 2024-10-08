
import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { PickerView } from '@ant-design/react-native';
import { TestSuite, TestCase } from '@rnoh/testerino';
import datas from './pickerData/data.json';

export default () => {
  const [value1, setvalue1] = useState<any>('');
  const [value2, setvalue2] = useState<any>('');
  const basicColumns = [
    [
      { label: '周一', value: 'Mon', key: '1' },
      { label: '周二', value: 'Tues', key: '2' },
      { label: '周三', value: 'Wed', key: '3' },
      { label: '周四', value: 'Thur', key: '4' },
      { label: '周五', value: 'Fri', key: '5' },
    ],
    [
      { label: '上午', value: 'am', key: '6' },
      { label: '下午', value: 'pm', key: '7' },
    ],
  ];

  const fruitOptions = [
    { label: 'Apple', value: 'apple' },
    { label: 'Banana', value: 'banana' },
    { label: 'Orange', value: 'orange' },
  ];
  const renderCustomLabel = (option: any) => (
    <View>
      <Text style={{ textAlign: 'center', lineHeight: 30 }}>{option.label}</Text>
    </View>
  );

  return (
    <TestSuite name="PickerViewTest">
      <TestCase itShould="render a PickerView data" tags={['C_API']}>
        <PickerView data={datas} />
      </TestCase>
      <TestCase itShould="render a PickerView value" tags={['C_API']}>
        <View style={{ padding: 10 }}>
          <Text>value:{value1}</Text>
          <PickerView data={basicColumns} cascade={false} value={value1} onChange={(value: any) => { setvalue1(value) }} />
        </View>
      </TestCase>
      <TestCase itShould="render a PickerView cascade={false}, cascade={true}" tags={['C_API']}>
        <PickerView data={basicColumns} cascade={false} />
        <PickerView data={datas} cascade={true} />
      </TestCase>
      <TestCase itShould="render a PickerView defaultValue={['Mon','pm']}" tags={['C_API']}>
        <PickerView data={basicColumns} cascade={false} defaultValue={['Mon', 'pm']} />
      </TestCase>
      <TestCase itShould="render a PickerView cols=1" tags={['C_API']}>
        <PickerView data={basicColumns} cascade={false} cols={1} />
      </TestCase>
      <TestCase itShould="render a PickerView onChange()" tags={['C_API']} initialState={false}
        arrange={({ setState }: any) =>
          <PickerView data={datas} value={value2} onChange={(value: any) => { setvalue2(value); setState(true); }} />
        }
        assert={({ expect, state }) => {
          expect(state).to.be.eq(true);
        }}>
      </TestCase>
      <TestCase itShould="render a PickerView renderLabel" tags={['C_API']}>
        <PickerView data={fruitOptions} cascade={false} cols={1} renderLabel={renderCustomLabel} />
      </TestCase>
      <TestCase itShould="render a PickerView loading" tags={['C_API']}>
        <PickerView data={basicColumns} cascade={false} loading={true} />
      </TestCase>
      <TestCase itShould="render a PickerView loadingContent='加载中...'" tags={['C_API']}>
        <PickerView data={basicColumns} cascade={false} loading={true} loadingContent={<Text style={{ fontSize: 18, marginLeft: 150, marginTop: 20 }}>加载中...</Text>} />
      </TestCase>
      <TestCase itShould="render a PickerView itemStyle={{backgroundColor:'pink'}}" tags={['C_API']}>
        <PickerView data={basicColumns} cascade={false} itemStyle={{ backgroundColor: 'pink' }} />
      </TestCase>
      <TestCase itShould="render a PickerView itemHeight={50}" tags={['C_API']}>
        <PickerView data={basicColumns} cascade={false} itemHeight={50} />
      </TestCase>
      <TestCase itShould="render a PickerView numberOfLines={2}" tags={['C_API']}>
        <PickerView data={basicColumns} cascade={false} numberOfLines={2} />
      </TestCase>
      <TestCase itShould="render a PickerView renderMaskTop backgroundColor='pink'" tags={['C_API']}>
        <PickerView data={basicColumns} cascade={false} renderMaskTop={() => <View style={{ backgroundColor: 'pink', width: 400, height: 100 }}><Text>top</Text></View>} />
      </TestCase>
      <TestCase itShould="render a PickerView renderMaskBottom backgroundColor='aqua'" tags={['C_API']}>
        <PickerView data={basicColumns} cascade={false} renderMaskBottom={() => <View style={{ backgroundColor: 'aqua', width: 400, height: 100 }}><Text>bottom</Text></View>} />
      </TestCase>
      <TestCase itShould="render a PickerView style={{ padding: 10, backgroundColor: 'pink' }}" tags={['C_API']}>
        <PickerView data={basicColumns} cascade={false} style={{ padding: 10, backgroundColor: 'pink' }} />
      </TestCase>
      <TestCase itShould="render a PickerView styles={{maskTop:{backgroundColor:'green'}}" tags={['C_API']}>
        <PickerView data={basicColumns} cascade={false} styles={{ maskTop: { backgroundColor: 'green', width: 100, height: 100 } }} />
      </TestCase>
    </TestSuite>
  );
};