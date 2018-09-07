import { TetrisCoreModule } from './tetris-core.module';

describe('TetrisCoreModule', () => {
  let tetrisCoreModule: TetrisCoreModule;

  beforeEach(() => {
    tetrisCoreModule = new TetrisCoreModule();
  });

  it('should create an instance', () => {
    expect(tetrisCoreModule).toBeTruthy();
  });
});
