export const generateId = (name: string): string =>
  `__shft_${name}_${Date.now().toString()}${Math.floor(Math.random() * 1000)}`;

export const convertKebabToCamel = (val: string): string => {
  return val.replace(/-([a-z])/g, g => g[1].toUpperCase());
};

export const getClassesFromProps = (
  self: any,
  names: string[],
  propertyName: string
): string[] => {
  const refArr = [];
  if (self[propertyName] != null || self[propertyName] != undefined) {
    names.forEach(name => {
      if (self[convertKebabToCamel(name)]) {
        refArr.push(`${name}-${self[convertKebabToCamel(name)]}`);
      }
    });
  }
  return refArr;
};

export const applyClasses = (self, preProcessCallback: Function = null) => {
  let cls = self.class ? self.class.split(" ") : [];
  if (preProcessCallback !== null) {
    const preProsCls = preProcessCallback(cls);
    cls = preProsCls ? preProsCls : cls;
  }
  _applyClasses(self, cls, true);
  return _applyClasses(self, cls);
};

const _applyClasses = (
  self: any,
  cls: string[],
  forHost: boolean = false
): string => {
  let clsFromProps = [];
  if (forHost) {
    try {
      clsFromProps = getClassesFromProps(
        self,
        self.supportedHostClasses,
        "supportedHostClasses"
      );
      cls = cls.concat(clsFromProps);
      try {
        if (!self.el.className.includes("hydrated")) {
          // only once before hydrating
          self.el.className += `${cls.map(c => ` ${c}`)}`;
        }
      } catch (e) {
        console.error("Must set host Element self.el");
      }
    } catch (e) {
      console.log(e);
      console.error("Must set supportedHostClasses");
    }
  } else {
    try {
      clsFromProps = getClassesFromProps(
        self,
        self.supportedClasses,
        "supportedClasses"
      );
      cls = cls.concat(clsFromProps);
      return cls.join(" ");
    } catch (e) {
      console.error("Must set supportedClasses");
    }
  }
  return "";
};

export const waitFor = (selector) => {
    return new Promise((res) => {
        waitForElementToDisplay(selector, 200);
        function waitForElementToDisplay(selector, time) {
            if (document.querySelector(selector) != null) {
                res(document.querySelector(selector));
            }
            else {
                setTimeout(function () {
                    waitForElementToDisplay(selector, time);
                }, time);
            }
        }
    });
  }