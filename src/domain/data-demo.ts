import {
  CategoryType, CommentType, OrderType, ProductType
} from "@/domain/type";
import { getRandomInt } from "@/ultil/helper";

export const getImageThumbnailRandom = () => {
  const random = getRandomInt(1, 6);

  return `/asset/dashboard/product-${random}.png`
}

export const DATA_PRODUCTS: ProductType[] = [
  {
    "title": "nulla neque libero convallis eget eleifend",
    "code": "CG-12",
    "id": "CG-12",
    "description": "pulvinar sed nisl nunc rhoncus dui vel sem sed sagittis nam congue risus semper porta volutpat quam pede lobortis ligula sit amet eleifend pede libero quis orci nullam molestie nibh in lectus pellentesque at nulla suspendisse potenti cras in purus eu magna vulputate luctus cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus etiam vel augue vestibulum rutrum rutrum neque aenean auctor gravida sem praesent id massa id nisl venenatis lacinia aenean sit amet justo morbi ut odio cras mi pede malesuada in imperdiet et commodo vulputate justo in blandit ultrices enim lorem ipsum dolor",
    "content": "volutpat convallis morbi odio odio elementum eu interdum eu tincidunt in leo maecenas pulvinar lobortis est phasellus sit amet erat nulla tempus vivamus in felis eu sapien cursus vestibulum proin eu mi nulla ac enim in tempor turpis nec euismod scelerisque quam turpis adipiscing lorem vitae mattis nibh ligula nec sem duis aliquam convallis nunc proin at turpis a pede posuere nonummy integer non velit donec diam neque vestibulum eget vulputate ut ultrices vel augue vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae donec pharetra magna vestibulum aliquet ultrices erat tortor sollicitudin mi sit amet lobortis sapien sapien non mi integer ac neque duis bibendum morbi non quam nec dui luctus rutrum nulla tellus in sagittis dui vel nisl duis ac nibh fusce lacus purus aliquet at feugiat non pretium quis lectus suspendisse potenti in eleifend quam a odio in hac habitasse platea dictumst maecenas ut massa quis augue luctus tincidunt nulla mollis molestie lorem quisque ut erat curabitur gravida nisi at nibh in hac habitasse platea dictumst aliquam augue quam sollicitudin vitae consectetuer",
    "store": 10,
    "price": 28890,
    'category': {
      title: 'Sport',
      id: "Sport",
    },
    "status": "public",
    "createdat": "2024-08-08T06:31:31Z"
  },
  {
    "title": "etiam justo etiam pretium iaculis justo in hac habitasse platea dictumst etiam faucibus cursus urna ut tellus nulla ut erat",
    "code": "US-MT",
    "id": "US-MT",
    "description": "fermentum justo nec condimentum neque sapien placerat ante nulla justo aliquam quis turpis eget elit sodales scelerisque mauris sit amet eros suspendisse accumsan tortor quis turpis sed ante vivamus tortor duis mattis egestas metus aenean fermentum donec ut mauris eget massa tempor convallis nulla neque libero convallis eget eleifend luctus ultricies eu nibh quisque id justo sit amet sapien dignissim vestibulum vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae nulla dapibus dolor vel est donec odio justo sollicitudin ut suscipit a feugiat et eros vestibulum ac est lacinia nisi venenatis tristique fusce congue diam id ornare imperdiet sapien urna pretium nisl ut volutpat sapien arcu sed augue aliquam erat volutpat in congue etiam justo etiam pretium",
    "content": "amet consectetuer adipiscing elit proin interdum mauris non ligula pellentesque ultrices phasellus id sapien in sapien iaculis congue vivamus metus arcu adipiscing molestie hendrerit at vulputate vitae nisl aenean lectus pellentesque eget nunc donec quis orci eget orci vehicula condimentum curabitur in libero ut massa volutpat convallis morbi odio odio elementum eu interdum eu tincidunt in leo maecenas pulvinar lobortis est phasellus sit amet erat nulla tempus vivamus in felis eu sapien cursus vestibulum proin eu mi nulla ac enim in tempor turpis nec euismod scelerisque quam turpis adipiscing lorem vitae mattis nibh ligula nec sem duis aliquam convallis nunc proin at turpis a pede posuere nonummy integer non velit donec diam neque vestibulum eget vulputate ut ultrices vel augue vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae donec pharetra magna vestibulum aliquet ultrices erat tortor sollicitudin mi sit amet lobortis sapien sapien non mi integer ac neque duis bibendum morbi non quam nec dui luctus rutrum nulla tellus in sagittis dui vel nisl duis ac nibh fusce lacus purus aliquet at feugiat non pretium",
    "store": 10,
    "price": 97540,
    'category': {
      title: 'Music',
      id: 'MU'
    },
    "status": "draft",
    "createdat": "2024-12-21T11:25:00Z"
  },
  {
    "title": "convallis duis consequat dui nec nisi volutpat eleifend donec ut dolor morbi vel lectus in quam fringilla rhoncus",
    "code": "US-WY",
    "id": "US-WY",
    "description": "condimentum id luctus nec molestie sed justo pellentesque viverra pede ac diam cras pellentesque volutpat dui maecenas tristique est et tempus semper est quam pharetra magna ac consequat metus sapien ut nunc vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae mauris viverra diam vitae quam suspendisse potenti nullam porttitor lacus at turpis donec posuere metus vitae ipsum aliquam non mauris morbi non lectus aliquam sit amet",
    "content": "vitae quam suspendisse potenti nullam porttitor lacus at turpis donec posuere metus vitae ipsum aliquam non mauris morbi non lectus aliquam sit amet diam in magna bibendum imperdiet nullam orci pede venenatis non sodales sed tincidunt eu felis fusce posuere felis sed lacus morbi sem mauris laoreet ut rhoncus aliquet pulvinar sed nisl nunc rhoncus dui vel sem sed sagittis nam congue risus semper porta volutpat quam pede lobortis ligula sit amet eleifend pede libero quis orci nullam molestie nibh in lectus pellentesque at nulla suspendisse potenti cras in purus eu magna vulputate luctus cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus etiam vel augue vestibulum rutrum rutrum neque aenean auctor gravida sem praesent id massa id nisl venenatis lacinia aenean sit amet justo morbi ut odio cras mi pede malesuada in imperdiet et commodo vulputate justo in blandit ultrices enim lorem ipsum dolor sit amet consectetuer adipiscing elit proin",
    "store": 52,
    "price": 10311,
    'category': {
      title: 'Music',
      id: 'MU'
    },
    "status": "public",
    "createdat": "2024-11-28T17:42:35Z"
  },
  {
    "title": "dolor quis odio consequat varius",
    "code": "BR-BA",
    "id": "BR-BA",
    "description": "enim lorem ipsum dolor sit amet consectetuer adipiscing elit proin interdum mauris non ligula pellentesque ultrices phasellus id sapien in sapien iaculis congue vivamus metus arcu adipiscing molestie hendrerit at vulputate vitae nisl aenean lectus pellentesque eget nunc donec quis orci eget orci vehicula condimentum curabitur in libero ut massa volutpat convallis morbi odio odio elementum eu interdum eu tincidunt in leo maecenas pulvinar lobortis est phasellus sit amet erat nulla tempus vivamus in felis eu sapien cursus vestibulum proin eu mi nulla ac enim in tempor turpis nec euismod scelerisque quam turpis adipiscing lorem vitae mattis nibh ligula nec sem duis aliquam convallis nunc proin at turpis a pede posuere nonummy integer",
    "content": "id ligula suspendisse ornare consequat lectus in est risus auctor sed tristique in tempus sit amet sem fusce consequat nulla nisl nunc nisl duis bibendum felis sed interdum venenatis turpis enim blandit mi in porttitor pede justo eu massa donec dapibus duis at velit eu est congue elementum in hac habitasse platea dictumst morbi vestibulum velit id pretium iaculis diam erat fermentum justo nec condimentum neque sapien placerat ante nulla justo aliquam quis turpis eget elit sodales scelerisque mauris sit amet eros suspendisse accumsan tortor quis turpis sed ante vivamus tortor duis mattis egestas metus aenean fermentum donec ut mauris eget massa tempor convallis nulla neque libero convallis eget eleifend luctus ultricies eu nibh quisque id justo sit amet sapien dignissim vestibulum vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae nulla dapibus dolor vel est donec odio justo sollicitudin ut suscipit a feugiat et eros vestibulum ac est lacinia nisi venenatis tristique fusce congue diam id ornare imperdiet sapien urna pretium nisl ut volutpat sapien arcu sed augue aliquam erat volutpat in congue etiam justo etiam pretium iaculis justo in hac habitasse platea dictumst etiam faucibus cursus",
    "store": 31,
    "price": 24315,
    'category': {
      title: 'Interior',
      id: "Interior"
    },
    "status": "public",
    "createdat": "2025-01-22T06:51:00Z"
  },
  {
    "title": "elit sodales scelerisque mauris sit amet eros suspendisse accumsan tortor quis turpis sed ante vivamus",
    "code": "CN-62",
    "id": "CN-62",
    "description": null,
    "content": "dui vel sem sed sagittis nam congue risus semper porta volutpat quam pede lobortis ligula sit amet eleifend pede libero quis orci nullam molestie nibh in lectus pellentesque at nulla suspendisse potenti cras in purus eu magna vulputate luctus cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus etiam vel augue vestibulum rutrum rutrum neque aenean auctor gravida sem praesent id massa id nisl venenatis lacinia aenean sit amet justo morbi ut odio cras mi pede malesuada in imperdiet et commodo vulputate justo in blandit ultrices enim lorem ipsum dolor sit amet consectetuer adipiscing elit proin interdum mauris non ligula pellentesque ultrices phasellus id sapien in sapien iaculis congue vivamus metus arcu adipiscing molestie hendrerit at vulputate vitae nisl aenean lectus pellentesque eget nunc donec quis orci eget orci vehicula condimentum curabitur in libero ut massa volutpat convallis morbi odio odio elementum eu interdum eu tincidunt in leo maecenas pulvinar lobortis est phasellus sit amet erat nulla tempus vivamus in felis eu sapien cursus vestibulum proin eu mi nulla",
    "store": null,
    "price": 38080,
    'category': {
      title: 'Interior',
      id: "Interior"
    },
    "status": "public",
    "createdat": "2025-01-16T12:30:28Z"
  },
  {
    "title": "convallis nunc proin at turpis a pede posuere",
    "code": "PG-MPL",
    "id": "PG-MPL",
    "description": null,
    "content": "in hac habitasse platea dictumst morbi vestibulum velit id pretium iaculis diam erat fermentum justo nec condimentum neque sapien placerat ante nulla justo aliquam quis turpis eget elit sodales scelerisque mauris sit amet eros suspendisse accumsan tortor quis turpis sed ante vivamus tortor duis mattis egestas metus aenean fermentum donec ut mauris eget massa tempor convallis nulla neque libero convallis eget eleifend luctus ultricies eu nibh quisque id justo sit amet sapien dignissim vestibulum vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae nulla dapibus dolor vel est donec odio justo sollicitudin ut suscipit a feugiat et eros vestibulum ac est lacinia nisi venenatis tristique fusce congue diam id ornare imperdiet sapien urna pretium nisl ut volutpat sapien arcu sed augue aliquam erat volutpat in congue etiam justo etiam pretium iaculis justo in hac habitasse platea dictumst etiam faucibus cursus urna ut tellus nulla ut erat id mauris vulputate elementum nullam varius nulla facilisi cras non velit nec nisi",
    "store": null,
    "price": 82185,
    'category': {
      title: 'Sport',
      id: "Sport"
    },
    "status": "inactive",
    "createdat": "2024-11-14T17:42:59Z"
  },
  {
    "title": "tincidunt lacus at velit vivamus vel nulla eget eros elementum pellentesque quisque",
    "code": "NO-14",
    "id": "NO-14",
    "description": "nam nulla integer pede justo lacinia eget tincidunt eget tempus vel pede morbi porttitor lorem id ligula suspendisse ornare consequat lectus in est risus auctor sed tristique in tempus sit amet sem fusce consequat nulla nisl nunc nisl duis bibendum felis sed interdum venenatis turpis enim blandit mi in porttitor pede justo eu massa donec dapibus duis at velit eu est congue elementum in hac habitasse platea dictumst morbi vestibulum velit id pretium iaculis diam erat fermentum justo nec condimentum neque sapien placerat ante nulla justo aliquam quis turpis eget elit sodales scelerisque mauris sit amet eros suspendisse accumsan tortor quis turpis sed ante vivamus tortor duis mattis egestas metus aenean fermentum donec",
    "content": "donec dapibus duis at velit eu est congue elementum in hac habitasse platea dictumst morbi vestibulum velit id pretium iaculis diam erat fermentum justo nec condimentum neque sapien placerat ante nulla justo aliquam quis turpis eget elit sodales scelerisque mauris sit amet eros suspendisse accumsan tortor quis turpis sed ante vivamus tortor duis mattis egestas metus aenean fermentum donec ut mauris eget massa tempor convallis nulla neque libero convallis eget eleifend luctus ultricies eu nibh quisque id justo sit amet sapien dignissim vestibulum vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae nulla dapibus dolor vel est donec odio justo sollicitudin ut suscipit a feugiat et eros vestibulum ac est lacinia nisi venenatis tristique fusce congue diam id ornare imperdiet sapien urna pretium nisl ut volutpat sapien arcu sed augue aliquam erat volutpat in congue etiam justo etiam pretium iaculis justo in hac habitasse platea dictumst etiam faucibus cursus urna ut tellus nulla ut erat id mauris vulputate elementum nullam varius nulla facilisi cras non velit nec nisi vulputate nonummy maecenas",
    "store": 81,
    "price": 87795,
    'category': {
      title: 'Sport',
      id: "Sport"
    },
    "status": "public",
    "createdat": "2024-10-14T08:37:10Z"
  },
  {
    "title": "justo nec condimentum neque sapien placerat ante nulla justo aliquam quis turpis eget elit sodales scelerisque mauris",
    "code": "US-AK",
    "id": "US-AK",
    "description": null,
    "content": "aliquam erat volutpat in congue etiam justo etiam pretium iaculis justo in hac habitasse platea dictumst etiam faucibus cursus urna ut tellus nulla ut erat id mauris vulputate elementum nullam varius nulla facilisi cras non velit nec nisi vulputate nonummy maecenas tincidunt lacus at velit vivamus vel nulla eget eros elementum pellentesque quisque porta volutpat erat quisque erat eros viverra eget congue eget semper rutrum nulla nunc purus phasellus in felis donec semper sapien a libero nam dui proin leo odio porttitor id consequat in consequat ut nulla sed accumsan felis ut at dolor quis odio consequat varius integer ac leo pellentesque ultrices mattis odio donec vitae nisi nam ultrices libero non mattis pulvinar nulla pede ullamcorper augue a suscipit nulla elit ac nulla sed vel enim sit amet nunc viverra dapibus nulla suscipit ligula in lacus curabitur at ipsum ac tellus semper interdum mauris ullamcorper purus sit amet nulla quisque",
    "store": null,
    "price": 33995,
    'category': {
      title: 'Sport',
      id: "Sport"
    },
    "status": "public",
    "createdat": "2024-10-29T13:14:56Z"
  },
  {
    "title": "risus praesent lectus vestibulum quam sapien varius ut blandit non interdum in ante vestibulum ante ipsum",
    "id": "AU-WA",
    "code": "AU-WA",
    "description": "vestibulum sit amet cursus id turpis integer aliquet massa id lobortis convallis tortor risus dapibus augue vel accumsan tellus nisi eu orci mauris lacinia sapien quis libero nullam sit amet turpis elementum ligula vehicula consequat morbi a ipsum integer a nibh in quis justo maecenas rhoncus aliquam lacus morbi quis tortor id nulla ultrices aliquet maecenas leo odio condimentum id luctus nec molestie sed justo pellentesque viverra pede ac diam cras pellentesque volutpat dui maecenas tristique est et tempus semper est quam pharetra magna ac consequat metus sapien ut nunc vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae mauris viverra diam vitae quam suspendisse potenti nullam porttitor lacus at turpis donec posuere metus vitae ipsum aliquam non mauris morbi non lectus aliquam sit amet diam in magna bibendum imperdiet nullam orci pede venenatis non sodales sed tincidunt eu felis fusce posuere felis",
    "content": "sed ante vivamus tortor duis mattis egestas metus aenean fermentum donec ut mauris eget massa tempor convallis nulla neque libero convallis eget eleifend luctus ultricies eu nibh quisque id justo sit amet sapien dignissim vestibulum vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae nulla dapibus dolor vel est donec odio justo sollicitudin ut suscipit a feugiat et eros vestibulum ac est lacinia nisi venenatis tristique fusce congue diam id ornare imperdiet sapien urna pretium nisl ut volutpat sapien arcu sed augue aliquam erat volutpat in congue etiam justo etiam pretium iaculis justo in hac habitasse platea dictumst etiam faucibus cursus urna ut tellus nulla ut erat id mauris vulputate elementum nullam varius nulla facilisi cras non velit nec nisi vulputate nonummy maecenas tincidunt lacus at velit vivamus vel nulla eget eros elementum pellentesque quisque porta volutpat erat quisque erat eros viverra eget congue eget semper rutrum nulla nunc purus phasellus in felis donec semper sapien a libero nam dui proin leo odio porttitor id consequat in consequat ut nulla sed accumsan felis ut at dolor quis odio consequat varius integer ac leo pellentesque ultrices mattis odio donec vitae nisi nam ultrices libero non mattis pulvinar",
    "store": null,
    "price": 32163,
    'category': {
      title: 'Sport',
      id: "Sport"
    },
    "status": "public",
    "createdat": "2025-02-03T09:17:51Z"
  },
  {
    "title": "amet consectetuer adipiscing elit proin risus praesent lectus vestibulum quam sapien varius ut blandit non interdum in ante",
    "code": "NO-19",
    "id": "NO-19",
    "description": "sagittis nam congue risus semper porta volutpat quam pede lobortis ligula sit amet eleifend pede libero quis orci nullam molestie nibh in lectus pellentesque at nulla suspendisse potenti cras in purus eu magna vulputate luctus cum sociis natoque penatibus",
    "content": "porttitor lacus at turpis donec posuere metus vitae ipsum aliquam non mauris morbi non lectus aliquam sit amet diam in magna bibendum imperdiet nullam orci pede venenatis non sodales sed tincidunt eu felis fusce posuere felis sed lacus morbi sem mauris laoreet ut rhoncus aliquet pulvinar sed nisl nunc rhoncus dui vel sem sed sagittis nam congue risus semper porta volutpat quam pede lobortis ligula sit amet eleifend pede libero quis orci nullam molestie nibh in lectus pellentesque at nulla suspendisse potenti cras in purus eu magna vulputate luctus cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus etiam vel augue vestibulum rutrum rutrum neque aenean auctor gravida sem praesent id massa id nisl venenatis lacinia aenean sit amet justo morbi ut odio cras mi pede malesuada in imperdiet et commodo vulputate justo in blandit ultrices enim lorem ipsum dolor sit amet consectetuer adipiscing elit proin interdum mauris non ligula pellentesque ultrices phasellus id sapien in sapien iaculis congue vivamus metus arcu adipiscing molestie hendrerit at vulputate vitae nisl aenean lectus pellentesque eget nunc donec quis orci",
    "store": 86,
    "price": 4438,
    'category': {
      title: 'Sport',
      id: "Sport"
    },
    "status": "public",
    "createdat": "2025-01-10T10:59:57Z"
  },
  {
    "title": "tincidunt nulla mollis molestie lorem quisque ut erat curabitur gravida nisi at nibh in hac habitasse",
    "code": "MY-13",
    "id": "MY-13",
    "description": "nunc nisl duis bibendum felis sed interdum venenatis turpis enim blandit mi in porttitor pede justo eu massa donec dapibus duis at velit eu est congue elementum in hac habitasse platea dictumst morbi vestibulum velit id pretium iaculis diam erat fermentum justo nec condimentum neque sapien placerat ante nulla justo aliquam quis turpis eget elit sodales scelerisque mauris sit amet eros suspendisse accumsan tortor quis turpis sed ante vivamus tortor duis mattis egestas metus aenean fermentum donec ut mauris eget massa tempor convallis nulla neque libero convallis eget eleifend luctus ultricies eu nibh quisque id justo sit amet sapien dignissim vestibulum vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere",
    "content": "est donec odio justo sollicitudin ut suscipit a feugiat et eros vestibulum ac est lacinia nisi venenatis tristique fusce congue diam id ornare imperdiet sapien urna pretium nisl ut volutpat sapien arcu sed augue aliquam erat volutpat in congue etiam justo etiam pretium iaculis justo in hac habitasse platea dictumst etiam faucibus cursus urna ut tellus nulla ut erat id mauris vulputate elementum nullam varius nulla facilisi cras non velit nec nisi vulputate nonummy maecenas tincidunt lacus at velit vivamus vel nulla eget eros elementum pellentesque quisque porta volutpat erat quisque erat eros viverra eget congue eget semper rutrum nulla nunc purus phasellus in felis donec semper sapien a libero nam dui proin leo odio porttitor id consequat in consequat ut nulla sed accumsan felis ut at dolor quis odio consequat varius integer ac leo pellentesque ultrices mattis odio donec vitae nisi nam ultrices libero non mattis pulvinar nulla pede ullamcorper augue a suscipit nulla elit ac nulla sed vel enim sit amet nunc viverra dapibus nulla suscipit ligula in lacus curabitur at ipsum ac tellus semper interdum mauris ullamcorper purus sit amet nulla quisque arcu libero rutrum ac lobortis vel dapibus at",
    "store": 66,
    "price": 95122,
    'category': {
      title: 'Sport',
      id: "Sport"
    },
    "status": "public",
    "createdat": "2024-07-27T02:14:23Z"
  },
  {
    "title": "ligula vehicula consequat morbi a",
    "code": "US-UT",
    "id": "US-UT",
    "description": null,
    "content": "vitae quam suspendisse potenti nullam porttitor lacus at turpis donec posuere metus vitae ipsum aliquam non mauris morbi non lectus aliquam sit amet diam in magna bibendum imperdiet nullam orci pede venenatis non sodales sed tincidunt eu felis fusce posuere felis sed lacus morbi sem mauris laoreet ut rhoncus aliquet pulvinar sed nisl nunc rhoncus dui vel sem sed sagittis nam congue risus semper porta volutpat quam pede lobortis ligula sit amet eleifend pede libero quis orci nullam molestie nibh in lectus pellentesque at nulla suspendisse potenti cras in purus eu magna vulputate luctus cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus etiam vel augue vestibulum rutrum rutrum neque aenean auctor gravida sem praesent id massa id nisl venenatis lacinia aenean sit amet justo morbi ut odio cras mi pede malesuada in imperdiet",
    "store": 24,
    "price": null,
    'category': {
      title: 'Sport',
      id: "Sport"
    },
    "status": "public",
    "createdat": "2024-03-27T16:28:09Z"
  },
  {
    "title": "platea dictumst morbi vestibulum velit",
    "code": "US-CO",
    "id": "US-CO",
    "description": "molestie sed justo pellentesque viverra pede ac diam cras pellentesque volutpat dui maecenas tristique est et tempus semper est quam pharetra magna ac consequat metus sapien ut nunc vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae mauris viverra diam vitae quam suspendisse potenti nullam porttitor lacus at turpis donec posuere metus vitae ipsum aliquam non mauris morbi non lectus aliquam sit amet diam in magna bibendum imperdiet nullam orci pede venenatis non sodales sed tincidunt eu felis fusce posuere felis sed lacus morbi sem mauris laoreet ut rhoncus aliquet pulvinar sed nisl nunc rhoncus dui vel sem sed sagittis nam congue risus semper porta volutpat quam pede lobortis ligula sit amet eleifend pede libero quis orci nullam molestie nibh in lectus pellentesque at nulla suspendisse potenti cras in purus",
    "content": "rutrum at lorem integer tincidunt ante vel ipsum praesent blandit lacinia erat vestibulum sed magna at nunc commodo placerat praesent blandit nam nulla integer pede justo lacinia eget tincidunt eget tempus vel pede morbi porttitor lorem id ligula suspendisse ornare consequat lectus in est risus auctor sed tristique in tempus sit amet sem fusce consequat nulla nisl nunc nisl duis bibendum felis sed interdum venenatis turpis enim blandit mi in porttitor pede justo eu massa donec dapibus duis at velit eu est congue elementum in hac habitasse platea dictumst morbi vestibulum velit id pretium iaculis diam erat fermentum justo nec condimentum neque sapien placerat ante nulla justo aliquam quis turpis eget elit sodales scelerisque mauris sit amet eros suspendisse accumsan tortor quis turpis sed ante vivamus tortor duis mattis egestas metus aenean fermentum donec ut mauris eget massa tempor convallis nulla neque libero convallis eget eleifend luctus ultricies eu nibh quisque id justo sit amet sapien dignissim vestibulum vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae nulla dapibus dolor vel est donec odio justo sollicitudin ut suscipit a feugiat et eros vestibulum ac est lacinia nisi venenatis",
    "store": 70,
    "price": 143312000,
    'category': {
      title: 'Sport',
      id: "Sport"
    },
    "status": "public",
    "createdat": "2024-05-13T14:30:52Z"
  },
  {
    "title": "pellentesque ultrices phasellus id sapien in sapien iaculis congue vivamus metus",
    "code": "US-CA",
    "id": "US-CA",
    "description": "morbi non lectus aliquam sit amet diam in magna bibendum imperdiet nullam orci pede venenatis non sodales sed tincidunt eu felis fusce posuere felis sed lacus morbi sem mauris laoreet ut rhoncus aliquet pulvinar sed nisl nunc rhoncus dui vel sem sed sagittis nam congue risus semper porta volutpat quam pede lobortis ligula sit amet eleifend pede libero quis orci nullam molestie nibh in lectus pellentesque at nulla suspendisse potenti cras in purus eu magna vulputate luctus cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus etiam vel augue vestibulum rutrum rutrum neque aenean auctor gravida sem praesent id massa id nisl venenatis lacinia aenean sit amet justo morbi ut odio cras mi pede malesuada in imperdiet et commodo vulputate justo",
    "content": "nulla nisl nunc nisl duis bibendum felis sed interdum venenatis turpis enim blandit mi in porttitor pede justo eu massa donec dapibus duis at velit eu est congue elementum in hac habitasse platea dictumst morbi vestibulum velit id pretium iaculis diam erat fermentum justo nec condimentum neque sapien placerat ante nulla justo aliquam quis turpis eget elit sodales scelerisque mauris sit amet eros suspendisse accumsan tortor quis turpis sed ante vivamus tortor duis mattis egestas metus aenean fermentum donec ut mauris eget massa tempor convallis nulla neque libero convallis eget eleifend luctus ultricies eu nibh quisque id justo sit amet sapien dignissim vestibulum vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae nulla dapibus dolor vel est donec odio justo sollicitudin ut suscipit a feugiat et eros vestibulum ac est lacinia nisi venenatis tristique fusce congue diam id ornare imperdiet sapien urna pretium nisl ut volutpat sapien arcu sed augue aliquam erat volutpat in congue etiam justo etiam pretium iaculis justo in hac habitasse platea dictumst etiam faucibus cursus urna",
    "store": 26,
    "price": 485000,
    'category': {
      title: 'Sport',
      id: "Sport"
    },
    "status": "public",
    "createdat": "2024-10-27T14:46:47Z"
  }
]


export const DATA_CATEGORY_PRODUCT: CategoryType[]             = [
  {
    "title": "Sports",
    "id": "SPORT",
    "description": "eleifend luctus ultricies eu nibh quisque id justo sit amet sapien dignissim vestibulum vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae nulla dapibus dolor vel est donec odio justo sollicitudin ut suscipit a feugiat et eros vestibulum ac est lacinia nisi venenatis tristique fusce congue diam id ornare imperdiet",
    "createdat": "2024-03-11T20:20:50Z"
  },
  {
    "title": "Life style",
    "id": "LIFESTYLE",
    "description": "orci nullam molestie nibh in lectus pellentesque at nulla suspendisse potenti cras in purus eu magna vulputate luctus cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus etiam vel augue vestibulum rutrum rutrum neque aenean auctor gravida sem praesent id massa id nisl venenatis lacinia",
    "createdat": "2024-03-11T07:50:50Z"
  },
  {
    "title": "Interior",
    "id": "INTERIOR",
    "description": "neque sapien placerat ante nulla justo aliquam quis turpis eget elit",
    "createdat": "2024-03-05T23:26:30Z"
  },
  {
    "title": "Ecommerce",
    "id": "ECOMMERCE",
    "description": "luctus nec molestie sed justo pellentesque viverra pede ac diam cras pellentesque volutpat dui maecenas tristique est et tempus semper est quam pharetra magna ac consequat metus sapien ut nunc vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae mauris viverra diam vitae quam suspendisse potenti nullam porttitor lacus at",
    "createdat": "2025-01-26T12:53:24Z"
  },
  {
    "title": "Music",
    "id": "MUSIC",
    "description": "lorem quisque ut erat curabitur gravida nisi at nibh in hac habitasse platea dictumst aliquam augue quam sollicitudin vitae consectetuer eget rutrum at lorem integer tincidunt ante vel ipsum praesent blandit lacinia erat vestibulum sed",
    "createdat": "2024-09-04T21:44:48Z"
  }
]
export const DATA_CATEGORY_PRODUCT_HAS_CHILREN: CategoryType[] = [
  {
    "title": "Sports",
    "id": "SPORT",
    children: [
      {
        'title': 'Sport child',
        "id": "SPORT1",
      },
      {
        'title': 'Sport child 2',
        "id": "SPORT2",
      },
      {
        'title': 'Sport child 3',
        "id": "SPORT3",
      },
    ]
  },
  {
    "title": "Life style",
    id: "LIFESTYLE",
    children: [
      {
        title: 'Life style child 1',
        id: "LIFESTYLE1",
      },
      {
        title: 'Life style child 2',
        id: "LIFESTYLE2",
      },
      {
        title: 'Life style child 3',
        id: "LIFESTYLE3",
      },
    ]
  },
  {
    "title": "Interior",
    id: "INTERIOR",
  },
  {
    "title": "Ecommerce",
    id: "ECOMMERCE",
  },
  {
    "title": "Music",
    id: "MUSIC",
  }
]

export const DATA_CATEGORY_POST: CategoryType[] = [
  {
    "title": "News",
    id: "NEWS",
    "description": "eleifend luctus ultricies eu nibh quisque id justo sit amet sapien dignissim vestibulum vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae nulla dapibus dolor vel est donec odio justo sollicitudin ut suscipit a feugiat et eros vestibulum ac est lacinia nisi venenatis tristique fusce congue diam id ornare imperdiet",
    "createdat": "2024-03-11T20:20:50Z"
  },
  {
    "title": "Helper",
    id: "HELPER",
    "description": "orci nullam molestie nibh in lectus pellentesque at nulla suspendisse potenti cras in purus eu magna vulputate luctus cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus etiam vel augue vestibulum rutrum rutrum neque aenean auctor gravida sem praesent id massa id nisl venenatis lacinia",
    "createdat": "2024-03-11T07:50:50Z"
  },
]

export const DATA_ORDER: OrderType[] = [
  {
    "id": "ea893564-db2a-4bfa-a0bc-f2e0a943abfc",
    "code": "65044-5285",
    "status": "draft",
    "comeForm": "app",
    "total": 37388000,
    "createdAt": "2025-01-21T03:28:52Z",
    "updateAt": "2024-07-21T02:13:16Z"
  },
  {
    "id": "017f7354-3118-4308-9016-9898546c8f92",
    "code": "47682-165",
    "status": "draft",
    "comeForm": "app",
    "total": 66213000,
    "createdAt": "2024-03-09T03:16:05Z",
    "updateAt": "2024-05-09T15:24:52Z"
  },
  {
    "id": "31bc6e97-8f69-4f49-95f7-fd7f105ec4f1",
    "code": "43269-844",
    "status": "pending",
    "comeForm": "live",
    "total": 54266000,
    "createdAt": "2025-02-01T22:28:19Z",
    "updateAt": "2024-06-06T05:20:05Z"
  },
  {
    "id": "ed8c410b-4eba-444a-a665-cf2981b7b87c",
    "code": "55154-4779",
    "status": "pending",
    "comeForm": "live",
    "total": 95743000,
    "createdAt": "2024-04-28T11:48:49Z",
    "updateAt": "2024-10-01T10:50:41Z"
  },
  {
    "id": "560e7620-edbe-446f-9ebe-1b40b87b72d6",
    "code": "0781-5938",
    "status": "completed",
    "comeForm": "app",
    "total": 7955000,
    "createdAt": "2025-02-11T12:03:31Z",
    "updateAt": "2025-01-30T18:13:36Z"
  },
  {
    "id": "3315bc1e-baa2-4a49-a811-a4d1eaf8ca3a",
    "code": "42957-001",
    "status": "draft",
    "comeForm": "app",
    "total": 99614000,
    "createdAt": "2024-04-12T09:59:45Z",
    "updateAt": "2024-12-26T07:05:42Z"
  },
  {
    "id": "96daaa56-9c9d-4201-ae80-b841bc11463d",
    "code": "49817-0070",
    "status": "canceled",
    "comeForm": "web",
    "total": 96595000,
    "createdAt": "2024-12-04T11:05:55Z",
    "updateAt": "2024-09-18T08:38:11Z"
  },
  {
    "id": "27ef0042-95ab-40fb-bad9-3eea0e4fb2e3",
    "code": "13668-047",
    "status": "pending",
    "comeForm": "app",
    "total": 35823000,
    "createdAt": "2024-03-31T00:15:53Z",
    "updateAt": "2025-01-05T06:26:47Z"
  },
  {
    "id": "153e4eb4-34dd-427c-83d8-ace3166ba067",
    "code": "48433-323",
    "status": "pending",
    "comeForm": "live",
    "total": 55804000,
    "createdAt": "2025-01-01T19:17:51Z",
    "updateAt": "2024-12-09T16:50:37Z"
  },
  {
    "id": "11868b88-4b5e-4a15-b488-617bc3f793b6",
    "code": "48951-2083",
    "status": "processing",
    "comeForm": "app",
    "total": 41542000,
    "createdAt": "2024-10-28T11:55:43Z",
    "updateAt": "2024-01-15T08:50:19Z"
  },
  {
    "id": "498f77fa-0cc7-4583-9c58-12082b4438f5",
    "code": "52343-051",
    "status": "shipping",
    "comeForm": "app",
    "total": 51321000,
    "createdAt": "2024-07-12T15:28:04Z",
    "updateAt": "2024-07-20T22:10:25Z"
  },
  {
    "id": "7fb39b46-7bd8-45fb-8a42-2d18f5207ee2",
    "code": "41520-809",
    "status": "processing",
    "comeForm": "web",
    "total": 65892000,
    "createdAt": "2024-03-23T20:20:28Z",
    "updateAt": "2024-01-14T04:03:41Z"
  },
  {
    "id": "7b1bc36c-7358-4e81-b1fd-c9d4e5a271bb",
    "code": "52731-7051",
    "status": "completed",
    "comeForm": "app",
    "total": 80738000,
    "createdAt": "2024-10-28T10:07:37Z",
    "updateAt": "2024-01-02T10:44:39Z"
  },
  {
    "id": "9b437274-a835-4d8a-972f-891a7bcca49f",
    "code": "55111-161",
    "status": "completed",
    "comeForm": "live",
    "total": 40237000,
    "createdAt": "2025-01-30T03:07:02Z",
    "updateAt": "2024-07-01T01:34:57Z"
  }
]

export const DATA_REVIEWS: CommentType[] = [
  {
    "id": "b05508f1-c828-4e05-830c-ba5c95c476f4",
    "userName": "Cassi Reynard",
    "content": "nisl duis bibendum felis sed interdum venenatis turpis enim blandit mi in porttitor",
    "status": "inactive",
    "star": 1,
    "createdAt": "2024-06-13T02:37:39Z",
    "updateAt": "2024-11-13T03:10:14Z"
  },
  {
    "id": "3cce4740-37ee-4b7f-a8c0-89a7ae8b575e",
    "userName": "Barbie Heckle",
    "content": "neque sapien placerat ante nulla justo aliquam quis turpis eget elit sodales scelerisque mauris sit",
    "status": "inactive",
    "star": 5,
    "createdAt": "2024-02-08T05:04:26Z",
    "updateAt": "2025-02-16T12:50:25Z"
  },
  {
    "id": "851424a5-ae5b-4559-996c-e98997532561",
    "userName": "Dan Rosas",
    "content": "pulvinar lobortis est phasellus sit amet erat nulla tempus vivamus in felis eu sapien cursus vestibulum proin eu mi nulla ac enim in tempor turpis nec euismod scelerisque quam turpis",
    "status": "inactive",
    "star": 4,
    "createdAt": "2024-12-02T14:41:23Z",
    "updateAt": "2024-07-23T07:46:42Z"
  },
  {
    "id": "85c4ceea-f50d-4402-902b-f6a18799270c",
    "userName": "Cyril Rodriguez",
    "content": "bibendum morbi non quam nec dui luctus rutrum nulla tellus in sagittis dui vel",
    "status": "waiting",
    "star": 1,
    "createdAt": "2024-08-05T04:41:28Z",
    "updateAt": "2024-09-13T03:58:55Z"
  },
  {
    "id": "aa24cc5f-731a-4817-802f-5ad64225cb0e",
    "userName": "Gallagher Craven",
    "content": null,
    "status": "draft",
    "star": 1,
    "createdAt": "2024-02-12T18:34:39Z",
    "updateAt": "2025-02-26T16:50:36Z"
  },
  {
    "id": "d2dcf95b-ddc1-4f49-bdc6-dcba1439c520",
    "userName": "Denise Western",
    "content": "nec condimentum neque sapien placerat ante nulla justo aliquam quis turpis eget elit sodales scelerisque mauris sit",
    "status": "public",
    "star": 2,
    "createdAt": "2024-03-23T21:23:30Z",
    "updateAt": "2024-09-17T14:37:52Z"
  },
  {
    "id": "cff70f97-e070-4c70-9532-eaaf9435d067",
    "userName": "Iggy Paolo",
    "content": "eget rutrum at lorem integer tincidunt ante vel ipsum praesent blandit lacinia erat vestibulum sed magna at nunc commodo placerat praesent blandit nam nulla integer pede justo",
    "status": "inactive",
    "star": 3,
    "createdAt": "2024-11-28T22:05:31Z",
    "updateAt": "2025-02-04T21:47:05Z"
  },
  {
    "id": "633c59bc-e27e-44a0-8798-a6e11a79fb69",
    "userName": "Aurilia Ollerhead",
    "content": "vestibulum sed magna at nunc commodo placerat praesent blandit nam nulla integer pede justo lacinia eget tincidunt eget tempus vel pede morbi porttitor lorem id ligula suspendisse",
    "status": "public",
    "star": 3,
    "createdAt": "2024-08-18T23:09:35Z",
    "updateAt": "2025-02-06T02:42:56Z"
  },
  {
    "id": "320bf7ee-3a7e-4698-80c1-c47f25b3f314",
    "userName": "Abbie Tinman",
    "content": "ultrices vel augue vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae donec pharetra magna vestibulum aliquet ultrices erat",
    "status": "waiting",
    "star": 5,
    "createdAt": "2024-06-30T22:45:59Z",
    "updateAt": "2024-07-07T08:52:11Z"
  },
  {
    "id": "dfb4d92f-24ac-4be7-a94d-8d8a6103c78b",
    "userName": "Natalya Cringle",
    "content": "nisi at nibh in hac habitasse platea dictumst aliquam augue quam",
    "status": "draft",
    "star": 3,
    "createdAt": "2024-08-19T05:28:15Z",
    "updateAt": "2025-02-23T06:00:19Z"
  },
  {
    "id": "57460f62-7669-4f2e-b632-10664fb7f963",
    "userName": "Brittney MacCard",
    "content": "dolor sit amet consectetuer adipiscing elit proin risus praesent lectus vestibulum quam sapien varius ut blandit non interdum in ante vestibulum",
    "status": "public",
    "star": 3,
    "createdAt": "2024-09-01T11:10:38Z",
    "updateAt": "2024-05-11T15:53:29Z"
  },
  {
    "id": "58333496-73bb-43bd-bba7-571cdccf74d6",
    "userName": "Shaina Poston",
    "content": "in hac habitasse platea dictumst morbi vestibulum velit",
    "status": "inactive",
    "star": 3,
    "createdAt": "2024-10-13T05:27:55Z",
    "updateAt": "2025-03-07T19:33:39Z"
  },
  {
    "id": "349b8a15-86ba-4271-a86e-e770d26ad40d",
    "userName": "Clary Attwooll",
    "content": null,
    "status": "draft",
    "star": 2,
    "createdAt": "2024-08-13T04:44:33Z",
    "updateAt": "2024-03-29T00:36:00Z"
  },
  {
    "id": "7b40f423-079c-483d-a205-b1c24ea7ace5",
    "userName": "Cordy Garmans",
    "content": null,
    "status": "public",
    "star": 1,
    "createdAt": "2024-10-23T17:00:13Z",
    "updateAt": "2024-04-29T02:22:19Z"
  }
]