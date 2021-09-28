import React from "react";
import { View, Text, FlatList } from "react-native";

import Header from "../../components/Header";
import Heading from "../../components/Heading";

import { Wrapper, Container, Main } from "./styles";

interface Item {
  key: string;
  render: () => JSX.Element;
  isTitle?: boolean;
}

const Following: React.FC = () => {
  const { data, indicies } = React.useMemo(() => {
    const items: Item[] = [
      {
        key: "PAGE_HEADING",
        render: () => <Heading>Following</Heading>,
      },
      {
        key: "FOLLOWED_CATEGORIES",
        render: () => <View />,
        isTitle: true,
      },
      {
        key: "C1",
        render: () => <View />,
      },
      {
        key: "LIVE_CHANNELS",
        render: () => <View />,
        isTitle: true,
      },
      {
        key: "C2",
        render: () => <View />,
      },
      {
        key: "CONTINUE_WATCHING",
        render: () => <View />,
        isTitle: true,
      },
      {
        key: "C3",
        render: () => <View />,
      },
      {
        key: "OFFLINE_CHANNELS",
        render: () => <View />,
        isTitle: true,
      },
      {
        key: "C4",
        render: () => <View />,
      },
    ];

    const indicies: number[] = [];
    items.forEach((item, index) => item.isTitle && indicies.push(index));

    return {
      data: items,
      indicies,
    };
  }, []);

  return (
    <Wrapper>
      <Container>
        <Header />
        <Main>
          <FlatList<Item>
            data={data}
            renderItem={({ item }) => item.render()}
            keyExtractor={(item) => item.key}
            stickyHeaderIndices={indicies}
            //Refresh Effects
            onRefresh={() => {}}
            refreshing={false}
          />
        </Main>
      </Container>
    </Wrapper>
  );
};

export default Following;
