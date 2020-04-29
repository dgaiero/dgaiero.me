import '../assets/less/contact/main.less'

import { Alert, Button, Col, Drawer, Form, Input, Row, message } from 'antd';
import React, { useEffect, useState } from 'react'

export default (props) => {
   const { visible, onClose } = props;
   const [ contactForm ] = Form.useForm();
   let msg = message;

   useEffect(() => {
      
   });

   const [status, setStatus] = useState({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null }
   })

   const [inputs, setInputs] = useState({
      name: '',
      email: '',
      subject: '',
      message: ''
   })

   const handleResponse = (s, m) => {
      if (s == 200) {
         setStatus({
            submitted: true,
            submitting: false,
            info: { error: false, msg: m }
         })
         setInputs({
            name: '',
            email: '',
            subject: '',
            message: ''
         })
         msg = message.success(`Success: ${m}`)
      }
      else {
         setStatus({
            info: { error: true, msg: m }
         })
         msg = message.error(`Error: ${m}`)
      }
      onClose();
   }

   const handleOnChange = e => {
      e.persist();
      setInputs(prev => ({
         ...prev,
         [e.target.id]: e.target.value
      }))
      setStatus({
         submitted: false,
         submitting: false,
         info: { error: false, msg: null }
      })
   }

   const handleOnSubmit = async e => {
      // e.preventDefault()
      setStatus(prevState => ({ ...prevState, submitting: true }))
      msg = message.loading('Sending Message...', 50);
      const res = await fetch('/api/sendMail', {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json'
         },
         body: JSON.stringify(inputs)
      })
      const text = await res.text();
      message.destroy()
      handleResponse(res.status, text);
   }

   return (
      <div>
         <Drawer
            title="Contact Me"
            keyboard
            className="contact-drawer"
            onClose={onClose}
            visible={visible}
            bodyStyle={{ paddingBottom: 80 }}
            footer={
               <div
                  style={{
                     textAlign: 'right',
                  }}
               >
                  <Button
                     onClick={onClose}
                     style={{ marginRight: 8 }}
                  >
                     Cancel
              </Button>
                  <Button
                     onClick={() => {
                        contactForm
                           .validateFields()
                           .then(contactForm.resetFields())
                           .then(handleOnSubmit)
                     }}
                     type="primary">
                     Submit
              </Button>
               </div>
            }
         >
            <Alert message={"If you would prefer to send an email directly, please use: hello@dgaiero.me"} type="info" />
            <Form layout="vertical" form={contactForm}>
               <Row gutter={16}>
                  <Col span={12}>
                     <Form.Item
                        name="name"
                        label="Name"
                        rules={[{ required: true, message: 'Please enter your name' }]}
                     >
                        <Input
                           placeholder="John Doe"
                           onChange={handleOnChange}
                           value={inputs.name}
                        />
                     </Form.Item>
                  </Col>
                  <Col span={12}>
                     <Form.Item
                        name="email"
                        label="Email"
                        rules={[{ type: 'email', required: true, message: 'Please enter a valid email address' }]}
                     >
                        <Input
                           placeholder="jdoe@email.com"
                           onChange={handleOnChange}
                           value={inputs.email}
                        />
                     </Form.Item>
                  </Col>
               </Row>
               <Row gutter={16}>
                  <Col span={24}>
                     <Form.Item
                        name="subject"
                        label="Subject"
                        rules={[{ required: false, message: 'Please enter a message subject' }]}
                     >
                        <Input
                           placeholder="Enter a Subject Here"
                           onChange={handleOnChange}
                           value={inputs.subject}
                        />
                     </Form.Item>
                  </Col>
               </Row>
               <Row gutter={16}>
                  <Col span={24}>
                     <Form.Item
                        name="message"
                        label="Message"
                        rules={[
                           {
                              required: true,
                              message: 'please enter your message',
                           },
                        ]}
                     >
                        <Input.TextArea
                           rows={4}
                           placeholder="Type your message here..."
                           onChange={handleOnChange}
                           value={inputs.message}
                        />
                     </Form.Item>
                  </Col>
               </Row>
            </Form>
         </Drawer>
      </div>
   );

}
