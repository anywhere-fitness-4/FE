import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";


    export const CenteredDiv1 = styled.div`
    display: flex; 
    justify-content: center;
    padding-top: 5%;`;
    
    export const StyledContainer1 = styled.div`
    border: 2px solid black;
    text-align: center;
    display: flex;
    justify-content: center;
    width: 50%;
    background-color: orange;
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
    `;
    
    export const StyledForm1 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    `;
    
    export const Input1 = styled(Field)`
    color: FF6A22;
    font-size: 2rem
    `;
    
    export const Span1 = styled.span`
    padding-bottom: 5%;`;
