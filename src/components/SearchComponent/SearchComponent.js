import React from 'react';
import { withRouter } from 'react-router-dom';
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
  
  class SeachComponent extends React.Component {
    allItems = webDummyData;
    state = { 
        webDummyData: [],
        selectedItem : ''

    };

    componentWillMount(){
        this.setState({
            webDummyData: this.allItems,
        });

        
    }
  
    handleStateChange = (changes, downshiftState) => {
      if (changes.hasOwnProperty('inputValue')) {
        this.setState(
            { webDummyData: this.getItems(changes.inputValue) });
      }
    };
  
    handleChange = (selectedItem, downshiftState) => {

      this.setState({ 
        webDummyData: this.allItems
       });

    
       
    };
  
    getItems = value => {
      let escapedValue = '';
      if(value){
        escapedValue = escapeRegexCharacters(value.trim());
      }
       
  
      if (escapedValue === '') {
        return webDummyData
      }
  
      const regex = new RegExp('^' + escapedValue, 'i');
     
        return webDummyData
        .map(section => {
          return {
            title: section.title,
            data: section.data.filter(item => regex.test(item['Business Name'])
            
            )
        }
        })
        .filter(section => section.data.length > 0);
    };

    itemToString = (i) => {
      return i ? i['Business Name'] : '';
    }

    submitSearchHandler = (event) => {
      if(event.keyCode === 13){
        this.props.history.push({
          pathname: 'search',
          search: '?Business Name='+ event.target.value
        })
      }
    }
  
    render() {
      console.log("props", this.props)
      return (
        <Div 
          css={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            textAlign: 'center'
          }}
        >
           <Downshift 
           onStateChange = {this.handleStateChange}
           itemToString = { this.itemToString }
           onChange = { this.handleChange}
           >
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
          <div className={css({ width: 400, margin: 0 })}>
            <Div position="relative">
              <Input
                {...getInputProps({
                  isOpen,
                  placeholder: 'Search'
                 
                })}
                onKeyDown  = { this.submitSearchHandler }/>
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
                  {this.state.webDummyData.reduce((result, section, sectionIndex) => {
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
                              {(section.title === 'Web') ? item['Business Name'] : 
                            <div>
                              <strong>{item['Business Name']} - {item['SolutionID']}</strong>
                              <p>{ item['SolDescription'] }</p>
                            </div> }
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
        </Div>
      );
    }
  }

  export default withRouter(SeachComponent);