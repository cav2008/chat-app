// Enzyme test adapter.
// Link to solution for Jest setup: https://stackoverflow.com/questions/46627353/where-should-the-enzyme-setup-file-be-written
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
