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
        selectedItem : ''

    };

    async componentWillMount(){
        // this.setState({
        //     webDummyData: this.allItems,
        // });
      const lexcenObject = { title: 'Lexcen', data: this.props.solutionData };
      console.log("lexcenObject11111", lexcenObject)
      let data = webDummyData;
      data.push(lexcenObject);
     await this.setState({
        webData: data
      }, () => { this.forceUpdate()});
      this.allItems = data;
       
        
    }

    async componentWillReceiveProps(nextProps){
      const lexcenObject = { title: 'Lexcen', data: this.props.solutionData };
      console.log("lexcenObject222", lexcenObject)
      let data = webDummyData;
      data.push(lexcenObject);
     await this.setState({
        webData: data
      }, () => { this.forceUpdate()});
      this.allItems = data;
     
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
        return this.state.webData
      }
  
      const regex = new RegExp('^' + escapedValue, 'i');
     
        return this.state.webData
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

    const showLexcenData = () => {
      
    }

     
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
                  {this.state.webData.reduce((result, section, sectionIndex) => {
                    result.sections.push(
                      <Section key={sectionIndex}> 
                        <SectionTitle className="titleName">
                          {section.title}
                        </SectionTitle>
                        {(section && section['data'])? section.data.map((item, itemIndex) => {
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
                        }): <div>Loading</div>}
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