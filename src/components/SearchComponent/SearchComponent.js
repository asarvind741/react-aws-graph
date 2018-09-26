import React from 'react';
import './SearchComponent.css';
import {
    Menu,
    ControllerButton,
    Input,
    Item,
    ArrowIcon,
    XIcon,
    Section,
    SectionTitle
  } from './AssocicatedSubComponents/AssociatedSubComponents';
  import webDummyData from '../../data/search-web';
  import  { Div } from 'glamorous';
  import { css } from 'glamor';
  import Downshift from 'downshift';


function escapeRegexCharacters(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }
  
  function SectionExampleDownshift({ items, ...rest }) {
    return (
      <Downshift {...rest}>
        {({
          getLabelProps,
          getInputProps,
          getButtonProps,
          getItemProps,
          isOpen,
          toggleMenu,
          clearSelection,
          selectedItem,
          inputValue,
          highlightedIndex
        }) =>
          <div className={css({ width: 250, margin: 'auto' })}>
            <Div position="relative">
              <Input
                {...getInputProps({
                  isOpen,
                  placeholder: 'Search'
                })}
              />
              {selectedItem
                ? <ControllerButton
                    onClick={clearSelection}
                    aria-label="clear selection"
                  >
                    <XIcon />
                  </ControllerButton>
                : <ControllerButton {...getButtonProps()}>
                    <ArrowIcon isOpen={isOpen} />
                  </ControllerButton>}
            </Div>
            {!isOpen
              ? null
              : <Menu className="dropDown">
                  {items.reduce((result, section, sectionIndex) => {
                    result.sections.push(
                      <Section key={sectionIndex}> 
                        <SectionTitle className="titleName">
                          {section.title}
                        </SectionTitle>
                        {section.data.map((item, itemIndex) => {
                          const index = result.itemIndex++;
                          return (
                            <Item 
                              key={itemIndex}
                              {...getItemProps({
                                item: item,
                                index: index,
                                isActive: highlightedIndex === index,
                                isSelected: selectedItem === item
                              })}
                            >
                              {item['Business Name']}
                            </Item>
                          )
                        })}
                      </Section>
                    )
                    return result;
                  }, { sections: [], itemIndex: 0}).sections}
                </Menu>}
          </div>}
      </Downshift>
    );
  }
  
  class SeachComponent extends React.Component {
    allItems = webDummyData;
    state = { 
        webDummyData: []
    };

    componentWillMount(){
        this.setState({
            webDummyData: webDummyData,
        })
    }
  
    handleStateChange = (changes, downshiftState) => {
      if (changes.hasOwnProperty('inputValue')) {
        this.setState(
            { webDummyData: this.getItems(changes.inputValue) },
            () => {
                console.log("websssssssssssss", this.state.webDummyData)
            }
            );
      }
    };
  
    handleChange = (selectedItem, downshiftState) => {
        
      this.setState({ webDummyData: this.allItems });
    };
  
    getItems = value => {
      const escapedValue = escapeRegexCharacters(value.trim());
  
      if (escapedValue === '') {
        return []
      }
  
      const regex = new RegExp('^' + escapedValue, 'i');
     
        return webDummyData
        .map(section => {
          return {
            title: section.title,
            data: section.data.filter(item => regex.test(item['Business Name'])
            
            )
          };
        })
        .filter(section => section.data.length > 0);
    };
  
    render() {
      return (
        <Div 
          css={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            textAlign: 'center'
          }}
        >
          <SectionExampleDownshift
            onStateChange={this.handleStateChange}
            onChange={this.handleChange}
            items={this.state.webDummyData}
          />
        </Div>
      );
    }
  }

  export default SeachComponent;