/*
 * @Author: Miya
 * @Date: 2022-02-09 22:19:58
 * @LastEditTime: 2022-02-09 22:50:53
 * @LastEditors: Miya
 * @Description: Select Step
 * @FilePath: \Misty\src\config\SelectStep.ts
 */

const SelectStep = 
  {
    step: 1,
    name: 'Framework',
    options:[{
      title: 'Vanilla JS',
      value: 'vanilla'
    },{
      title: 'jQuery(Compatible IE9)',
      value: 'jqueryv1'
    },
    {
      title: 'jQuery(Compatible IE11)',
      value: 'jqueryv3'
    },
    {
      title: 'Vue2.6',
      value: 'vue2'
    },
    {
      title: 'Vue2.6 + TypeScript',
      value: 'vue2ts'
    },
    {
      title: 'Vue3.2',
      value: 'vue3'
    },
    {
      title: 'Vue3.2 + TypeScript',
      value: 'vue3ts'
    }]
  }


export default SelectStep;