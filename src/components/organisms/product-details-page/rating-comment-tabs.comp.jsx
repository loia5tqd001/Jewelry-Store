import React from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';

function RatingCommentTabs() {
  return (
    <Tabs>
      <TabList>
        <Tab>Đánh giá</Tab>
        <Tab>Bình luận</Tab>
      </TabList>

      <TabPanel>
        <h2>Chưa có đánh giá nào</h2>
      </TabPanel>
      <TabPanel>
        <h2>Chưa có bình luận nào</h2>
      </TabPanel>
    </Tabs>
  );
}

export default RatingCommentTabs;
