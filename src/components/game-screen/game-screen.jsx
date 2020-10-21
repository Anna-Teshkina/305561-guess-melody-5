// В этом компоненте будет сосредоточена логика переключния игровых экранов.
// Компонент должен рендериться по маршруту `/game`.
// В стейте будем хранить индекс очередной игры.

import {PureComponent} from "react";

class GameScreen extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      step: 0,
    };
  }
}

export default GameScreen;
