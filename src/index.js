import React, { PureComponent } from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';
import { Transition } from 'react-transition-group';

class App extends PureComponent {
    constructor(...args) {
        super(...args);

        this.state = {
            open: false,
        };
    }

    render() {
        return (
            <div>
                <button onClick={() => this.setState(prevState => ({ open: !prevState.open }))}>
                    Toggle
                </button>
                <Transition
                    in={this.state.open}
                    timeout={500}
                >
                    {
                        state => {
                            switch (state) {
                              case 'entering':
                                return 'Entering…';
                              case 'entered':
                                return 'Entered!';
                              case 'exiting':
                                return 'Exiting…';
                              case 'exited':
                                return 'Exited!';
                            }
                        }
                    }
                </Transition>
            </div>
        );
    }
}

render(<App />, document.getElementById('app'));
