import { APIGatewayProxyEvent, APIGatewayProxyResult, Context } from 'aws-lambda';
import { StringManipulator } from './StringManipulator';

export const handler = async (event: APIGatewayProxyEvent, context: Context): Promise<APIGatewayProxyResult> => {
    const body = event.body;

    if(!body){
       return {
        statusCode: 400,
        body: JSON.stringify({
            error: "Bad Request",
            message: "No data sent in",
        }),
       };
    }

    try {
        const manipulator = new StringManipulator();
        const result = manipulator.reverseInput(body);
        console.log("Reversed input:", result);

    return {
        statusCode: 200,
        body: JSON.stringify({
            message: result,
            requestId: context.awsRequestId,
        }),
    }
    } catch (error) {
        console.error(error);
        return ({
            statusCode: 400,
            body: JSON.stringify({
                error: "Bad request",
                message: error,
            }),
        });
    }

    
}

