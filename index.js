export default class MyComponent extends React.Component {
  static classArrow = () => 'I m an arrow function on the class';
  instanceArrow = () => 'I m an arrow function on the instance';

  static oldschool = function() {
    return 'I am oldschool'
  };

  render(){
    return null
  }
}
