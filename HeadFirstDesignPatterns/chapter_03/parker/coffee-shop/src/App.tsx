import { useState } from 'react';
import { Beverage } from './coffeeKiosk/interface/Beverage';
import kiosk from './assets/kiosk.svg';
import { beverages, options } from './const';

function App() {
  const [beverage, setBeverage] = useState<Beverage>();


  return (
    <div style={{ position: 'relative' }}>
      <img
        src={kiosk}
        style={{ position: 'absolute', width: '500px' }}
      />

      <div
        id='wrapper'
        style={{ position: 'relative', top: '130px', left: '80px', display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: '280px' }}
      >
        {/* 음료 */}
        <div id='beverages'>
          <h2>음료</h2>
          <ul style={{ display: 'flex', gap: '10px', padding: '0' }}>
            {beverages.map(beverage => (
              <li style={{ listStyle: 'none' }}>
                <button onClick={() => setBeverage(beverage.instance)}>
                  {beverage.name}
                </button>
              </li>)
            )}
          </ul>
        </div>

        {/* 옵션 */}
        <div id='options'>
          <h2>옵션</h2>
          <div style={{ display: 'flex', gap: '20px' }}>
            {beverage && (
              options.map(option => {
                if (option.isSelect) {
                  return (
                    <select
                      onChange={(e) => {
                        const { value } = e.currentTarget;

                        option.selectOptions?.forEach(selectOption => {
                          if (selectOption.name === value) {
                            setBeverage(selectOption.instance(beverage));
                          }
                        });
                      }}
                    >
                      {option.selectOptions?.map(selectOption => (
                        <option value={selectOption.name}>{selectOption.name}</option>
                      ))}
                    </select>
                  );
                }
                return (
                  <button onClick={() => setBeverage(option.instance(beverage))}>
                    {option.name}
                  </button>
                );
              })
            )}
          </div>
        </div>

        {/* 결과 */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div style={{ marginLeft: '10px' }}>
            <span>선택된 음료: &nbsp;</span>
            <span>{beverage?.getDescription()}</span>
          </div>

          <div style={{ marginLeft: '20px' }}>
            <span>총 가격: &nbsp;</span>
            <span>{beverage?.cost()}</span>
          </div>
        </div>
      </div>
    </div >
  );
}

export default App;
