import React from 'react';
import { storiesOf, action, setAddon } from '@kadira/storybook';
import infoAddon from '@kadira/react-storybook-addon-info';
import mockedInfoAddon from './react-storybook-addon-info-mock';
import Cards from '../src/Cards';
import customized from './less/button.less';

if (process.env.NODE_ENV !== 'test') {
  setAddon(infoAddon);
} else {
  setAddon(mockedInfoAddon);
}

const actionLogger = action();
const items = [
  {
    id: 'corkboard',
    title: 'Cork Board',
    image: './images/corkboard.jpg'
  },
  {
    id: 'blueboard',
    title: 'Blue Board',
    image: './images/blueboard.jpg'
  },
  {
    id: 'stripe',
    title: 'Stripe',
    image: './images/stripe.jpg'
  },
  {
    id: 'goldgrazing',
    title: 'Gold Grazing',
    image: './images/goldgrazing.jpg'
  }
];

storiesOf('Cards', module)
  .addWithInfo('with basic usage', () => (
    <div className="cardss-wrap">
      <Cards
        items={items}
      />
    </div>
  ))
  .addWithInfo('with append className', () => (
    <div className="cardss-wrap">
      <Cards
        items={items}
        className="foobar"
      />
    </div>
  ))
  .addWithInfo('with event handling', () => (
    <div className="cardss-wrap">
      <Cards
        items={items}
        onClick={item => actionLogger('clicked', item)}
        onReachToBottom={() => actionLogger('reach to bottom')}
      />
    </div>
  ))
  .addWithInfo('with classic theme', () => (
    <div className="cardss-wrap">
      <Cards
        items={items}
        theme="classic"
      />
    </div>
  ))
  .addWithInfo('with cover interaction', () => (
    <div className="cardss-wrap">
      <Cards
        items={items}
        hover="cover"
      />
    </div>
  ))
  .addWithInfo('with top position text', () => (
    <div className="cardss-wrap">
      <Cards
        items={items}
        position="top"
      />
    </div>
  ))
  .addWithInfo('with bottom position text', () => (
    <div className="cardss-wrap">
      <Cards
        items={items}
        position="bottom"
      />
    </div>
  ))
  .addWithInfo('with spacing cardss', () => (
    <div className="cardss-wrap">
      <Cards
        items={items}
        hasSpace
      />
    </div>
  ))
  .addWithInfo('with unclickable', () => (
    <div className="cardss-wrap">
      <Cards
        items={items}
        clickable={false}
      />
    </div>
  ))
  .addWithInfo('with selected item caset', () => (
    <div className="cardss-wrap">
      <Cards
        items={items.map((item, index) =>
          ({
            id: item.id,
            title: item.title,
            image: item.image,
            selected: index % 2
          })
        )}
      />
    </div>
  ))
  .addWithInfo('with no title item caset', () => (
    <div className="cardss-wrap">
      <Cards
        items={items.map(item =>
          ({
            id: item.id,
            image: item.image
          })
        )}
      />
    </div>
  ))
  .addWithInfo('with customize styles', () => (
    <div className="cardss-wrap">
      <Cards
        text="Search"
        styles={customized}
      />
    </div>
  ));