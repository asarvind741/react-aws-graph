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
    allItems = [];
    state = { 
        webData: webDummyData,
        selectedItem : '',
        solutionData: []

    };

    async componentWillMount(){     
      this.setState({
        solutionData:this.props.solutionData
      });
      const lexcenObject = { title: 'Lexcen', data: this.props.solutionData };
      let data = webDummyData;
      data.push(lexcenObject);
     await this.setState({
        webData: data
      }, () => { this.forceUpdate()});
      this.allItems = data;
    }

    async componentWillReceiveProps(nextProps){
     if(this.props.solutionData != nextProps.solutionData){
       this.setState({solutionData: nextProps.solutionData})
     this.forceUpdate();
     }
     
    }

    shouldComponentUpdate(nextProps, nextState){
      return true;
    }
   
  
    handleStateChange = (changes, downshiftState) => {
      if (changes.hasOwnProperty('inputValue')) {
        this.setState(
            { webData: this.getItems(changes.inputValue) });
      }
    };
  
    handleChange = (selectedItem, downshiftState) => {

      this.setState({ 
        webData: this.allItems
       });

    
       
    };
  
    getItems = value => {
      let escapedValue = '';
      if(value){
        escapedValue = escapeRegexCharacters(value.trim());
      }
       
  
      if (escapedValue === '') {
        return this.allItems
      }
  
      const regex = new RegExp('^' + escapedValue, 'i');
     
        return this.allItems
        .map(section => {
          return {
            title: section.title,
            data: section.data.filter(item => regex.test(item['businessName'])
            
            )
        }
        })
        .filter(section => section.data.length > 0);
    };

    itemToString = (i) => {
      return i ? i['businessName'] : '';
    }

    submitSearchHandler = (event) => {
      if(event.keyCode === 13){
        this.props.history.push({
          pathname: 'search',
          search: '?businessName='+ event.target.value
        })
      }
    }

    
    

   
  
    render() {
      let webDummyData1 = webDummyData;
      let tempObject = {title: 'Lexcen', data: this.state.solutionData};
      let data = webDummyData1.splice(1, webDummyData1.length-1);
      webDummyData1.push(tempObject);
     
      return (
        <Div 
          css={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            textAlign: 'center',
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
       
          <div className= "center_search">
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
                  {webDummyData.reduce((result, section, sectionIndex) => {
                    result.sections.push(
                      <Section key={sectionIndex}> 
                        <SectionTitle className="titleName">
                          {section.title}
                        </SectionTitle>
                        {(section && section.data) ?
                        section.data.map((item, itemIndex) => {
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
                              {(section.title === 'Web') ? item['businessName'] : 
                            <div>
                              <strong>{item['businessName']} - {item['solutionId']}</strong>
                              <p>{ item['solutionDescription'] }</p>
                            </div> }
                            </Item>
                          )
                        })
                      : null}
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