let util = {
  debounceIdentify: 0,
  bounce (func, delay) {
    this.debounceIdentify && clearTimeout(this.debounceIdentify);
    this.debounceIdentify = setTimeout(() => {
      func.apply(this, arguments);
    }, delay);
  }
};

export function setTitle (title) {
  title = title || 'CMADP';
  window.document.title = title;
}

export function setMenu (routers, code) {
  /*
  *  @routers  redux管理�?appRouter和otherRouter 的路由表
  *  @code  用户类型   user.codetype 字段  值为 1�?�?�?
  *
  * */
  let menu = [];
  routers.forEach(router => {
    const INDEX = router.children[0];
    if (INDEX.meta.role.indexOf(code) > -1) {
      let obj = {
        title: INDEX.meta.title,
        path: `${router.path}/${INDEX.path}`,
        icon: `el-icon-dogma-${INDEX.meta.icon}`
      };
      menu.push(obj);
    }
  });
  
  return menu;
}


export function getCurrentPath (vm, router) {
  // console.log(router);
  // const routers = vm.$store.state.routers;
  // console.log(routers);
  
  let currentPathArr = [];
  
  if (router.name !== 'home') {
    if (router.name.indexOf('_index') > -1) {
      currentPathArr.push({
        title: router.meta.title,
        path: '',
        name: router.name
      });
    } else {
      router.matched.forEach(item => {
        let obj = {
          title: item.meta.title,
          path: item.path,
          name: item.name
        };
        if (item.path.indexOf('/:id') > -1) {
          obj.path = router.path;
        }
        currentPathArr.push(obj);
      });
    }
  }
  
  // console.log(currentPathArr);
  // �?currentPathArr 的长度不为空的时�? 提交 action
  
  return currentPathArr;
}

export function mergeBarData (target, data) {
  console.log(target);
  console.log(data);
  if (target.legend && target.legend.data.length) {
    target.legend.data = data.map(first => {
      return first.name;
    });
  }
  
  if (target.nest) {
    target.xAxis.data = data[0].value.map(first => {
      return first.name;
    });
    
    target.series = data.map(first => {
      let obj = {
        name: first.name,
        type: 'bar',
        label: {
          normal: {
            show: true,
            position: 'top',
            formatter: '{c}'
          }
        },
        data: []
      };
      obj.data = first.value.map(second => {
        return second.value;
      });
      return obj;
    });
  } else {
    let categoryAxis = target.xAxis.type === 'category' ? target.xAxis : target.yAxis;
    
    categoryAxis.data = data.map(first => {
      return first.name;
    });
    
    target.series[0].data = data.map(first => {
      return first.value;
    });
  }
  return target;
}

export default util;
